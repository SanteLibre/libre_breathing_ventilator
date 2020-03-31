import datetime

from flask import Blueprint, jsonify, request

from api.db import VentilatorData
from api.rpi_data.constants import DATE_FORMAT

bp = Blueprint('rpi_data', __name__, url_prefix='/rpi_data')


@bp.route('/data', methods=['GET'])
def get_data_date_range():
    """
    fetches results in the ventilator_data table.
    get params can be passed to the request: start_date and end_date.
    they need to be a number of the format yyyymmddhhMMSSff.
    it is possible to only pass yyyy, or yyyymm even y then yy. as long as the sequence yyyymmddhhMMSSff is respected.

    :return: list of json objects. see VentilatorData.to_dict() to get format of the json objects.
    """
    now = datetime.datetime.now()
    time_ago = now - datetime.timedelta(minutes=5)
    stringified_date = time_ago.strftime(DATE_FORMAT)
    start_date = request.args.get('start_date', stringified_date)
    end_date = request.args.get('end_date')
    query = VentilatorData.query
    if start_date:
        try:
            start_date = start_date
        except ValueError:
            return jsonify("start_date must be of the format yyyymmddhhMMSSff")
        query = query.filter(VentilatorData.time >= start_date)
    if end_date:
        try:
            end_date = int(end_date)
        except TypeError:
            jsonify("start_date must be of the format yyyymmddhhMMSSff")
        query = query.filter(VentilatorData.time <= end_date)
    query_res = query.all()
    pressure_graph = [{'value': [result.id, result.pressure]} for result in query_res]
    flow_graph = [{'value': [result.id, result.flow]} for result in query_res]
    volume_graph = [{'value': [result.id, result.volume]} for result in query_res]
    last_record = query_res[-1]
    response = {
        'graphs': [pressure_graph, flow_graph, volume_graph],
        'cards': {
            'ppeak': last_record.ppeak,
            'peep': last_record.peep,
            'pmean': last_record.pmean,
            'rr': last_record.rr,
            'o2conc': last_record.o2conc,
            'vte': last_record.vte,
            'ie_ratio': last_record.ie_ratio,
            'mve': last_record.mve
        }
    }
    return jsonify({'data':response})
