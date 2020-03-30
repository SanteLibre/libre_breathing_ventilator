import datetime
import random
import shutil

from log_rpi.backend.api import db
from log_rpi.backend.api.db import VentilatorData
from log_rpi.backend.api.rpi_data.constants import TIME_UNIT_MAP, FREESPACE_LIMIT

TIME_UNIT_ADD = 'minute'  # can be changed for any time unit we want (must be plural)
STEP_ADD = 2  # will generate data for each STEP_ADD TIME_UNIT_ADD
TIME_UNIT_DELETE = 'hour'  # can be changed for any time unit we want (must be plural)
STEP_DELETE = 1  # will delete the STEP_DELETE last TIME_UNIT_DELETE


def populate_db(simulation=False, **kwargs):
    if not simulation:
        # maybe do some validation here
        insert_data(**kwargs)
    else:
        # assuming the format we get from the arduino is the following:
        # {"time", values_1 float[], values_2 float[], values_3 float[], v1, v2, v3}
        # say we get x (size) values every minute for the past day
        size = 6
        now = datetime.datetime.now().replace(second=00, microsecond=00)  # replacing seconds for convenience
        now_midnight = now.replace(hour=00, minute=00, second=00, microsecond=00)
        time_ago = now - datetime.timedelta(**{f"{TIME_UNIT_ADD}s": 1})
        while now_midnight <= time_ago:
            stringified_date = time_ago.strftime("%Y%m%d%H%M%S%f")
            print(f'Creating data for date: {stringified_date}')
            # not the prettiest code.
            kwargs = {
                'float_array1': [random.uniform(0.0, 200.0) for _ in range(size)],
                'float_array2': [random.uniform(0.0, 200.0) for _ in range(size)],
                'float_array3': [random.uniform(0.0, 200.0) for _ in range(size)],
                'value1': random.uniform(0.0, 200.0),
                'value2': random.uniform(0.0, 200.0),
                'value3': random.uniform(0.0, 200.0),
            }
            insert_data(**kwargs)
            time_ago -= datetime.timedelta(minutes=1)
        print('done')


def insert_data(**kwargs):
    data_to_add = db.VentilatorData(**kwargs)
    if not enough_freespace():
        delete_last_time_range()
    db.db.session.add(data_to_add)
    db.db.session.commit()


def enough_freespace():
    _, __, free = shutil.disk_usage(__file__)
    return free > FREESPACE_LIMIT


def delete_last_time_range():
    count_to_delete = get_count_to_delete()
    print(f'DELETING {count_to_delete}')
    rows_to_delete = VentilatorData.query.order_by(VentilatorData.time.desc()).limit(count_to_delete).all()
    pk_to_delete = [row.time for row in rows_to_delete]
    # see https://stackoverflow.com/a/54271540 for synchronize_session
    VentilatorData.query.filter(VentilatorData.time.in_(pk_to_delete)).delete(synchronize_session='fetch')
    db.db.session.commit()


def get_count_to_delete():
    time_unit_ratio = TIME_UNIT_MAP[TIME_UNIT_DELETE][TIME_UNIT_ADD]
    count_to_delete = STEP_DELETE * time_unit_ratio / STEP_ADD
    return count_to_delete


def stringify_array(array):
    return ','.join(str(value) for value in array)
