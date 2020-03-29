import datetime
import random

from log_rpi.backend.api import db


def populate_db(simulation=False):
    if not simulation:
        print('nothing to do')
    else:
        # assuming the format we get from the arduino is the following:
        # {"time", values_1 float[], values_2 float[], values_3 float[], v1, v2, v3}
        # say we get x (size) values every minute for the past day
        size = 6
        granularity = {'minutes': 1} # can be changed for any time range we want
        now = datetime.datetime.now().replace(second=00, microsecond=00)  # replacing seconds for convenience
        now_midnight = now.replace(hour=00, minute=00, second=00, microsecond=00)
        time_ago = now - datetime.timedelta(**granularity)
        while now_midnight <= time_ago:
            stringified_date = time_ago.strftime("%Y%m%d%H%M%S%f")
            print(f'Creating data for date: {stringified_date}')
            float_array1 = [random.uniform(0.0, 200.0) for _ in range(size)]
            float_array2 = [random.uniform(0.0, 200.0) for _ in range(size)]
            float_array3 = [random.uniform(0.0, 200.0) for _ in range(size)]
            value1 = random.uniform(0.0, 200.0)
            value2 = random.uniform(0.0, 200.0)
            value3 = random.uniform(0.0, 200.0)

            data_to_add = db.VentilatorData(
                time=stringified_date,
                array_float_1=stringify_array(float_array1),
                array_float_2=stringify_array(float_array2),
                array_float_3=stringify_array(float_array3),
                value1=value1,
                value2=value2,
                value3=value3
            )
            db.db.session.add(data_to_add)
            db.db.session.commit()
            time_ago -= datetime.timedelta(minutes=1)
        print('done')


def stringify_array(array):
    return ','.join(str(value) for value in array)
