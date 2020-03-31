HOUR = 'hour'
MINUTE = 'minute'
SECOND = 'second'
MICROSECOND = 'microsecond'
TIME_UNIT_MAP = {
    HOUR: {
        HOUR: 1,
        MINUTE: 60,
        SECOND: 3600,
        MICROSECOND: 3.6e+9
    },
    MINUTE: {
        HOUR: 1/60,
        MINUTE: 1,
        SECOND: 60,
        MICROSECOND: 6e+7
    },
    SECOND: {
        HOUR: 1/3600,
        MINUTE: 1/60,
        SECOND: 1,
        MICROSECOND: 1e+6
    },
}

FREESPACE_LIMIT = 1000
TIME_UNIT_ADD = 'minute'  # can be changed for any time unit we want
STEP_ADD = 2  # will generate data for each STEP_ADD TIME_UNIT_ADD
TIME_UNIT_DELETE = 'hour'  # can be changed for any time unit we want
STEP_DELETE = 1  # will delete the STEP_DELETE last TIME_UNIT_DELETE
