import datetime
import random

from log_rpi.backend.api import db


def populate_db(simulation=False):
    if not simulation:
        print('nothing to do')
    else:
        # say we get 6 (size) values every minute for the past day
        size = 6
        now = datetime.datetime.now().replace(second=00)  # replacing seconds for convenience
        now_midnight = now.replace(hour=00, minute=00, second=00)
        time_ago = now - datetime.timedelta(minutes=1)
        while now_midnight != time_ago:
            stringified_date = time_ago.strftime("%Y%m%d%H%M%S")
            print(f'Creating data for date: {stringified_date}')
            values = [random.uniform(0.0, 200.0) for _ in range(size)]
            stringified_values = ','.join(str(value) for value in values)
            data_to_add = db.VentilatorData(date=int(stringified_date), values=stringified_values)
            db.db.session.add(data_to_add)
            db.db.session.commit()
            time_ago -= datetime.timedelta(minutes=1)
        print('done')

