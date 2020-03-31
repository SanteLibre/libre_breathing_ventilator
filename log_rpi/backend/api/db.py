import os

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_utils import create_database

db = SQLAlchemy()


class VentilatorData(db.Model):
    """
    assuming we receive the following format from the arduino
    {"time", values_1 float[], values_2 float[], values_3 float[], v1, v2, v3}
    """

    __tablename__ = 'ventilator_data'
    time = db.Column(db.String(), unique=True, primary_key=True)  # format yyyymmddhhmmssff
    array_float_1 = db.Column(db.String())  # comma separated floats
    array_float_2 = db.Column(db.String())  # comma separated floats
    array_float_3 = db.Column(db.String())  # comma separated floats
    value1 = db.Column(db.Float())
    value2 = db.Column(db.Float())
    value3 = db.Column(db.Float())

    def to_dict(self):
        """
        useful to return results in endpoint.
        :return: a dictionnary of the format {attribute_name: attribute_value, ...}
        """
        return {
            'time': self.time,
            'array_float_1': [float(val) for val in self.array_float_1.split(',')],
            'array_float_2': [float(val) for val in self.array_float_2.split(',')],
            'array_float_3': [float(val) for val in self.array_float_3.split(',')],
            'value1': self.value1,
            'value2': self.value2,
            'value3': self.value3,
        }


def recover_db(db_url):
    """
    Quick fix in case the db is corrupt.
    Creates a backup of the corrupt db then creates a fresh new db.
    :param db_url: path of the .db file
    :return: nothing. might raise in edge cases.
    """

    print('something went wrong with the database. Trying to recover')
    os.rename(db_url, f'{db_url}-backup')
    print('corrupted db backup created')
    create_database(f'sqlite:///{db_url}')

    # this is kinda ugly and probably unnecessarily complicated, but it covers most of the cases
    try:
        db.create_all()
    except RuntimeError as rte:
        if rte.args[0].startswith('No application found.'):
            pass
        else:
            raise
    try:
        db.session.rollback()
    except RuntimeError as rte:
        if rte.args[0].startswith('No application found.'):
            pass
        else:
            raise
    try:
        db.session.commit()
    except RuntimeError as rte:
        if rte.args[0].startswith('No application found.'):
            pass
        else:
            raise
    print('new db created')
