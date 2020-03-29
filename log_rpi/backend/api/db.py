from contextlib import contextmanager

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import sessionmaker

db = SQLAlchemy()


class VentilatorData(db.Model):
    __tablename__ = 'ventilator_data'
    date = db.Column(db.INT(), unique=True, primary_key=True)  # format yyyymmddhhmmss
    values = db.Column(db.String())  # comma separated floats
