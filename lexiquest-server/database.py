from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

URL_DATABASE="mysql+pymysql://root:@localhost:3306/wordle"

engine = create_engine(URL_DATABASE)

SessinLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()