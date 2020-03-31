# Python Flask Starter Bundle Instructions
## Description
This is readme and instructions how start using flask backend bundle from Akveo. Backend bundle is integrated solution of Flask micro-framework and Angular Frontend code. Backend code plays mostly API role, giving data to the client side as REST API.
Backend part of Flask Starter Bundle is based on modern python framework [Flask](http://flask.pocoo.org/) framework.
[Flask Documentation](http://flask.pocoo.org/docs/1.0/) helps with understanding of Flask principles.
# Running Instructions
Application requires a database to correctly run. It can be any database SQLAlchemy supports. In development by default Sqlite database is used, which is stored at `api/bundle.db`. If you would like to use other database in development mode, change database URL in `api/config.py` line 46.

### Running the backend

0) Install python 3. You can find [here](https://realpython.com/installing-python/) instructions for your operation system.

1) Change directory to the *backend* folder `cd backend`

2) Create virtualenv `virtualenv -p python3 bundle_env`

3) Activate virtualenv `source bundle_env/bin/activate`

4) Install required python modules `pip install -r requirements.txt`

5) Only during the initial launch create database schema for your application `python manage.py recreate_db`

6) Run the application `python manage.py runserver`

That's it! Now your application is running at port 3001 and you can access it by typing `http://localhost:3001/` in your browser.

### Running React front end

Before running React you need to have node installed 

0) Install nodejs. You can download it using you operating system package manager or from [here](https://nodejs.org/en/download/).

1) Go to the *frontend_react* folder `cd frontend_react`

2) Run commands `npm install` and `npm start`
3) Open `http://localhost:3000` in your browser
4) create new user using interface and start working with app

