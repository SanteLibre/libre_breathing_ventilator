from flask import Blueprint, jsonify, request

from . import models

bp = Blueprint('rpi_data_simulation', __name__, url_prefix='/rpi_data_simulation')
model = models.Data()


@bp.route('/data', methods=['GET'])
def get_data():
    return jsonify({"data": model.get_data()})
