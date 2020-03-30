
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from sqlalchemy.exc import DatabaseError

from api import create_app
from api.db import db, recover_db
# sets up the app
from log_rpi.backend.api.rpi_data.populate_db import populate_db

app = create_app()

manager = Manager(app)
migrate = Migrate(app, db)

# adds the python manage.py db init, db migrate, db upgrade commands
manager.add_command("db", MigrateCommand)


@manager.command
def runserver():
    app.run(debug=True, host="0.0.0.0", port=3001)


@manager.command
def runworker():
    app.run(debug=False)


@manager.command
def recreate_db():
    """
    Recreates a database. This should only be used once
    when there's a new database instance. This shouldn't be
    used when you migrate your database.
    """
    try:
        db.drop_all()
        db.create_all()
        db.session.commit()
    except DatabaseError:
        recover_db(db.engine.url.database)


@manager.command
def populate_db_sim():
    populate_db(simulation=True)


if __name__ == "__main__":
    manager.run()

