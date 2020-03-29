from flask import Blueprint, jsonify, request

from log_rpi.backend.api.db import VentilatorData

bp = Blueprint('rpi_data', __name__, url_prefix='/rpi_data')


@bp.route('/data', methods=['GET'])
def get_data_date_range():
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    query = VentilatorData.query
    if start_date:
        try:
            start_date = int(start_date)
        except ValueError:
            return jsonify("start_date must be of the format yyyymmddhhMMSS")
        query = query.filter(VentilatorData.time >= start_date)
    if end_date:
        try:
            end_date = int(end_date)
        except TypeError:
            jsonify("start_date must be of the format yyyymmddhhMMSS")
        query = query.filter(VentilatorData.time <= end_date)
    query_res = query.all()
    return jsonify(json_list=[result.to_dict() for result in query_res])
