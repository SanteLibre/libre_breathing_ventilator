from flask import Blueprint, jsonify, request

from log_rpi.backend.api.db import VentilatorData
from . import models

bp = Blueprint('rpi_data_simulation', __name__, url_prefix='/rpi_data_simulation')
model = models.Data()


@bp.route('/data', methods=['GET'])
def get_data():
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    date_params = {'start_date': start_date, 'end_date': end_date}
    return get_data_date_range(**date_params)


def get_data_date_range(start_date=None, end_date=None):
    if not start_date and not end_date:
        return jsonify({"data": model.get_data()})
    else:
        query = VentilatorData.query
        if start_date:
            try:
                start_date = int(start_date)
            except ValueError:
                return jsonify("start_date must be of the format yyyymmddhhMMSS")
            query = query.filter(VentilatorData.date >= start_date)
        if end_date:
            try:
                end_date = int(end_date)
            except TypeError:
                jsonify("start_date must be of the format yyyymmddhhMMSS")
            query = query.filter(VentilatorData.date <= end_date)
        query_res = query.all()
        return jsonify(json_list=[result.to_dict() for result in query_res])
