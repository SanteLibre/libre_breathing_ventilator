#!/usr/bin/env bash


echo -e "\n--- Changing the wallpaper image --"
# sudo cp Background/wallpaper/* /usr/share/desktop-base/active-theme/wallpaper/contents/images
pcmanfm -w /home/pi/libre_breathing_ventilator/os_rpi/Backgrounds/wallpaper/1920x1200.svg

echo -e "\n--- Removing trash on desktop --"
sudo sed -i 's/show_trash=1/show_trash=0/g' /etc/xdg/pcmanfm/LXDE-pi/desktop-items-0.conf

# echo -e "\n--- Changing the boot CLI background image --"
sudo cp /home/pi/libre_breathing_ventilator/os_rpi/Backgrounds/grub-4x3.png /usr/share/desktop-base/futureprototype-theme/grub/grub-4x3.png
