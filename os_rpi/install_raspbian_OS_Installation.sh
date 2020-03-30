#!/bin/sh
#--------------------------------------------------
# Install Dependencies
#--------------------------------------------------
echo -e "\n--- Installing Python 3 + pip3 + virtualEnv --"
sudo apt-get update
sudo apt-get install git python3 python3-pip python3-venv virtualenv htop vim tig fbi -y


#--------------------------------------------------
# Set-up python service
#--------------------------------------------------



#--------------------------------------------------
# Splash screen, ref. https://scribles.net/customizing-boot-up-screen-on-raspberry-pi/ and https://yingtongli.me/blog/2016/12/21/splash.html
#--------------------------------------------------
#
## Cleanning up the Boot process
#echo -e "\n--- Setting the splash screen config--"
#Configfile="$(basename /boot/config*)"
#if grep -Fxq "disable_splash=1" /boot/$Configfile
#then
#    echo "\n--- Splash option already set --- "
#else
#    echo "disable_splash=1" >> /boot/$Configfile
#fi
#
#echo -e "\n--- Disable the Raspberry Pi logo in the corner of the screen --"
#Configfile="/boot/cmdline.txt"
#if grep -Fxq "logo.nologo" $Configfile
#then
#    echo "\n--- Splash option already set --- "
#else
#    echo "logo.nologo" >> $Configfile
#fi
#
#echo -e "\n--- Disable the various bits of output from the kernel and friends --"
#if grep -Fxq "consoleblank=0 loglevel=1 quiet" /boot/$Configfile
#then
#    echo "\n--- Splash option already set --- "
#else
#    echo "consoleblank=0 loglevel=1 quiet" >> /boot/$Configfile
#fi

## Set up the splash screen
##sudo cp ./systemd/splash.png /opt/splash.png
#sudo cp ./systemd/splash.png /etc/splash.png
#sudo cp ./systemd/asplashscreen /etc/init.d/asplashscreen
#
##sudo cp ./systemd/splashscreen.service /etc/systemd/system/splashscreen.service
#sudo systemctl enable splashscreen
#

## Change pix.script file for the one on the repo
#echo -e "\n--- Remove text message under splash image --"
#Configfile="/usr/share/plymouth/themes/pix/pix.script"
#sed "/message_sprite = Sprite();/ s/^#*/#/" -i $Configfile
#declare -a StringArray=("message_sprite = Sprite();" "message_sprite.SetPosition(screen_width * 0.1, screen_height * 0.9, 10000);" "my_image = Image.Text(text, 1, 1, 1);" "message_sprite.SetImage(my_image);")
#for val in ${StringArray[@]}; do
#   echo $val
#    sed -e "/^*$val/ s/^#*/#/" -i $Configfile
#done
#
## copy if found the lxsession folder for
if [ ! -d "/home/pi/.config/lxsession" ]
then
    cp -r  /etc/xdg/lxsession /home/pi/.config/
    cd /home/pi/.config/lxsession/LXDE-pi
    cat ./autostart
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

cd ../../log_rpi/backend
virtualenv -p python3 bundle_env
source bundle_env/bin/activate
pip install -r requirements.txt
