#!/bin/sh

# Installing flask for python web app.
pip install flask

# Set up chromium kiosk mode to load python localwebpage

# copy if found the lxsession folder for
if [ ! -d "/home/pi/.config/lxsession" ]
then
    cp -r  /etc/xdg/lxsession /home/pi/.config/
    cd /home/pi/.config/lxsession/LXDE-pi
    cat ./autostart
    echo @python /home/pi/libre_breathing_ventilator/html.py >> /home/pi/.config/lxsession/LXDE-pi//autostart
    echo @chromium --kiosk --incognito http://localhost:5000 >> /home/pi/.config/lxsession/LXDE-pi/autostart
    echo @xset s off >> /home/pi/.config/lxsession/LXDE-pi/autostart
    echo @xset -dpms >> /home/pi/.config/lxsession/LXDE-pi/autostart
    echo @xset s noblank >> /home/pi/.config/lxsession/LXDE-pi/autostart
fi

