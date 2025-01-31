import {MAX_DAILY_ATTEMPTS} from "../lib/config";
import {CharacterTile} from "./CharacterTile";
import {Fragment} from "react";
import {AttemptHistoryData} from "../types/AttemptHistoryData";

export interface AttemptHistoryProps {
    attemptHistory: AttemptHistoryData;
}

export function AttemptHistory(props: AttemptHistoryProps) {
    return (
        <Fragment>
            {props.attemptHistory.entries.sort((a, b) => {
                return b.timestamp.getTime() - a.timestamp.getTime();
            }).map((entry, attemptIndex, array) => (
                <div key={attemptIndex} className="flex flex-row gap-4 justify-center ">
                    <p className="text-xl">
                        <b>{array.length - attemptIndex}</b> / {MAX_DAILY_ATTEMPTS}
                    </p>
                    {entry.word.split("").map((char, characterIndex) => (
                        <CharacterTile key={`${attemptIndex}-${characterIndex}`} value={char}
                                       correctness={entry.correctness[characterIndex]}/>
                    ))}
                    <p className="text-xl text-transparent">
                        <b>{array.length - attemptIndex}</b> / {MAX_DAILY_ATTEMPTS}
                    </p>
                </div>
            ))}
        </Fragment>
    );
}
