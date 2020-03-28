#!/bin/sh

# Installing flask for python web app.
pip install flask

# Set up chromium kiosk mode to load python localwebpage

# copy if found the lxsession folder for
if [ ! -d "/home/pi/.config/lxsession" ]
then
    cp -r  /etc/xdg/lxsession .
    cd /home/pi/.config/lxsession/LXDE-pi/
    echo @python /home/pi/flask/html.py >> ./autostart
    echo @chromium --kiosk --incognito http://localhost:5000 >> ./autostart
    echo @xset s off >> ./autostart
    echo @xset -dpms >> ./autostart
    echo @xset s noblank >> ./autostart
fi

