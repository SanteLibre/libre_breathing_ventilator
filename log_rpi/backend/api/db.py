from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class VentilatorData(db.Model):
    __tablename__ = 'ventilator_data'
    date = db.Column(db.INT(), unique=True, primary_key=True)  # format yyyymmddhhmmss
    values = db.Column(db.String())  # comma separated floats

    def to_dict(self):
        return {'date': self.date, 'values': self.values}
