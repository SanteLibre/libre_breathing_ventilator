from flask_sqlalchemy import SQLAlchemy

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
        return {
            'time': self.time,
            'array_float_1': [float(val) for val in self.array_float_1.split(',')],
            'array_float_2': [float(val) for val in self.array_float_2.split(',')],
            'array_float_3': [float(val) for val in self.array_float_3.split(',')],
            'value1': self.value1,
            'value2': self.value2,
            'value3': self.value3,
        }
