from .auth.controllers import bp as auth_bp
from .user.controllers import bp as user_bp
from .rpi_data_simulation.controllers import bp as rpi_data_simulation_bp
from .rpi_data.controllers import bp as rpi_data_bp


def register_blueprints(app):
    for bp in [auth_bp, user_bp, rpi_data_bp, rpi_data_simulation_bp]:
        if app.config['API_ROOT']:
            bp.url_prefix = app.config['API_ROOT'] + bp.url_prefix
        app.register_blueprint(bp)
