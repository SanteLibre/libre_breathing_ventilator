# Libre Breathing Ventilator

TBD

### Prerequisites

* Raspberry Pi Zero W with Raspbian


### Installing

1. Clone this repo in your **home directory** `git clone https://github.com/sante-libre/libre_breathing_ventilator.git`
2. Enter folder `cd libre_breathing_ventilator`
3. Run installation script `./install_raspbian_OS_Installation`
4. Reboot  `reboot`
5. See the interface page in kiosk mode
5. (If required) To force close chromium use the command to open menu and run `sudo killall chromium`


### What it does... 

The html.py will run at start-up and then chromium will load the web page in kiosk mode (full screen without menu bar).
The wallpaper and background image are changed for the project images.


## VirtualBox set-up (windows) for testing the scripts and programs without having a RPI

1. Install VirtualBox and create a a new VM
2. Create a vm using our image (option 1)  https://drive.google.com/drive/folders/1gONyFlPbzX5rJBqfmRBiUqHsqWsTmAgy
    ```
        1. Type: Linux  / Other Linux (32bits)
        2. Memory size for RPI zero W = 512MB
        3. Use an existing virtual disk and select the vdi image
    ```
3. Create a vm (option 2)
    ```
        1. Type: Linux  / Other Linux (32bits)
        2. Memory size for RPI zero W = 512MB
        3. Create a virtual Hard disk now
        4. VDI
        5. Dynamically allocated
        6. Size 8.00GB
        7. Mount the official Raspbian iso
            1. Select the VM and Click Settings
            2. In the Storage menu, select the empty optical drive and choose the Iso.
            3. Proceed to installation of the os
            4. Follow the installation process above
    ```
4. Create a img of the vm
    1. Use  VBoxmanage tool to convert the vdi to img.
    ```
        C:\Program Files\Oracle\VirtualBox\VBoxManage.exe clonehd "%userprofile%\VirtualBox VMs\VM_Name\VM_Name.vdi" output.img
    ```
    

