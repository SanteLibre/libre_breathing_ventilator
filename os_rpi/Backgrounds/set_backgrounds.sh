#!/usr/bin/env bash


echo -e "\n--- Changing the wallpaper image --"
# sudo cp Background/wallpaper/* /usr/share/desktop-base/active-theme/wallpaper/contents/images
pcmanfm -w /home/pi/libre_breathing_ventilator/os_rpi/Backgrounds/wallpaper/1920x1200.svg

echo -e "\n--- Removing trash on desktop --"
sudo sed -i 's/show_trash=1/show_trash=0/g' /etc/xdg/pcmanfm/LXDE-pi/desktop-items-0.conf

# echo -e "\n--- Changing the boot CLI background image --"
sudo cd /home/pi/libre_breathing_ventilator/os_rpi/Backgrounds//usr/share/desktop-base/futureprototype-theme/grub/grub-4x3.png ???


## Environement variables
#OE_USER="pi"
#OE_HOME="/home/${OE_USER}"
#OE_HOME_lbv="${OE_HOME}/libre_breathing_ventilator"
#OE_BKG="${OE_HOME_lbv}/Backgrounds"
#OE_CONFIG="${OE_USER}"
#
#echo -e "\n--- Changing the splash image --"è
#sudo cp ./systemd/splash.png /usr/share/plymouth/themes/pix/splash.png
#
#echo -e "\n--- Changing the backgrounds images (CLI) --"
#
#sudo rm -f /tmp/${OE_CONFIG}
#
#cat <<EOF > /tmp/${OE_CONFIG}
#<background>
#  <static>
#    <duration>8640000.0</duration>
#    <file>
#      <size width="1280" height="1024">${OE_BKG}/wallpaper/1280x1024.svg</size>
#      <size width="1600" height="1200">${OE_BKG}/wallpaper/1600x1200.svg</size>
#      <size width="1920" height="1080">${OE_BKG}/wallpaper/1920x1080.svg</size>
#      <size width="1920" height="1200">${OE_BKG}/wallpaper/1920x1200.svg</size>
#      <size width="2560" height="1080">${OE_BKG}/wallpaper/2560x1080.svg</size>
#      <size width="2560" height="1440">${OE_BKG}/wallpaper/2560x1440.svg</size>
#      <size width="3840" height="2160">${OE_BKG}/wallpaper/3840x2160.svg</size>
#    </file>
#  </static>
#</background>
#EOF
#
#echo -e "* Security Init File"
#sudo cp /tmp/${OE_CONFIG} /etc/systemd/system/${OE_SRV}.service
#ref. https://scribles.net/customizing-boot-up-screen-on-raspberry-pi/ and https://yingtongli.me/blog/2016/12/21/splash.html

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