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
    id = db.Column(db.INT(), autoincrement=True, primary_key=True, unique=True)
    time = db.Column(db.String(), unique=True)  # format yyyymmddhhmmssff
    pressure = db.Column(db.Float())
    flow = db.Column(db.Float())
    volume = db.Column(db.Float())
    ppeak = db.Column(db.Float())
    peep = db.Column(db.Float())
    pmean = db.Column(db.Float())
    rr = db.Column(db.Float())
    o2conc = db.Column(db.Float())
    vte = db.Column(db.Float())
    ie_ratio = db.Column(db.String())
    mve = db.Column(db.Float())

    def to_dict(self):
        """
        useful to return results in endpoint.
        :return: a dictionnary of the format {attribute_name: attribute_value, ...}
        """
        return {
            'id': self.id,
            'time': self.time,
            'pressure': self.pressure,
            'flow': self.flow,
            'volume': self.volume,
            'ppeak': self.ppeak,
            'peep': self.peep,
            'pmean': self.pmean,
            'rr': self.rr,
            'o2conc': self.o2conc,
            'vte': self.vte,
            'ie_ratio': self.ie_ratio,
            'mve': self.mve,
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
