#!/usr/bin/env bash

#--------------------------------------------------
# To remove unwanted programs that take too much space
#--------------------------------------------------
sudo apt-get  remove thonny sonic-pi sense-emu-tools geany smartsim pytjon-games vlc* libreoffice* scratch -y

#--------------------------------------------------
# Install Dependencies
#--------------------------------------------------
echo -e "\n--- Installing Python 3 + pip3 + virtualEnv --"
sudo apt-get update
sudo apt-get install git python3 python3-pip python3-venv virtualenv htop vim tig fbi -y

#--------------------------------------------------
# Set-up python service
#--------------------------------------------------
./systemd/websrv.sh


#--------------------------------------------------
# Splash screen,
#--------------------------------------------------
./Backgrounds/set_backgrounds.sh


if [ ! -d "/home/pi/.config/lxsession" ]
then
    cp -r  /etc/xdg/lxsession /home/pi/.config/
    cd /home/pi/.config/lxsession/LXDE-pi
    #    echo @python /home/pi/libre_breathing_ventilator/html.py >> /home/pi/.config/lxsession/LXDE-pi//autostart
    #    echo @chromium --kiosk --incognito http://localhost:4200 >> /home/pi/.config/lxsession/LXDE-pi/autostart
    echo @xset s off >> /home/pi/.config/lxsession/LXDE-pi/autostart
    echo @xset -dpms >> /home/pi/.config/lxsession/LXDE-pi/autostart
    echo @xset s noblank >> /home/pi/.config/lxsession/LXDE-pi/autostart
fi

# Making systemctl run the service and restart-it in case of error
#    echo @python /home/pi/libre_breathing_ventilator/html.py >> /home/pi/.config/lxsession/LXDE-pi//autostart
#    echo @chromium --kiosk --incognito http://localhost:4200 >> /home/pi/.config/lxsession/LXDE-pi/autostart

#--------------------------------------------------
# Virtual environement
#--------------------------------------------------
echo -e "\n--- Installing virtualEnv ans setting it up--"

cd /home/pi/libre_breathing_ventilator/log_rpi/backend/
virtualenv -p python3 bundle_env
source bundle_env/bin/activate
pip install -r requirements.txt
