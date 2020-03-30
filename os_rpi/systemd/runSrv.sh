#!/usr/bin/env bash

cd ../../log_rpi/backend
source bundle_env/bin/activate
python manage.py runserver