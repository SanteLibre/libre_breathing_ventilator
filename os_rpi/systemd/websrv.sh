#!/usr/bin/env bash

# environement variables
OE_USER="pi"
OE_HOME="/home/${OE_USER}"
OE_HOME_lbv="${OE_HOME}/libre_breathing_ventilator"
OE_SRV="Breathing_ventilator_websrv"
OE_CLIENT="Breathing_ventilator_webClient"
OE_CONFIG="${OE_USER}"
OE_PORT="4200"

echo -e "\n* Create temporary Srv service "
sudo rm -f /tmp/${OE_CONFIG}
cat <<EOF > /tmp/${OE_CONFIG}
[Unit]
Description=Serveur_libre_breathing_ventilator
[Service]
Type=simple
SyslogIdentifier=${OE_USER}
PermissionsStartOnly=true
User=${OE_USER}
Group=${OE_USER}
Restart=always
RestartSec=5
ExecStart=${OE_HOME_lbv}/os_rpi/systemd/runSrv.sh
StandardOutput=journal+console
[Install]
WantedBy=multi-user.target
EOF

echo -e "* Security Init File"
sudo cp /tmp/${OE_CONFIG} /etc/systemd/system/${OE_SRV}.service
sudo chmod 755 /etc/systemd/system/${OE_SRV}.service
sudo chown root: /etc/systemd/system/${OE_SRV}.service

echo -e "* Start ODOO on Startup"
sudo systemctl daemon-reload
sudo systemctl enable ${OE_CONFIG}.service

echo -e "\n* Create temporary client service"
sudo rm -f /tmp/${OE_CONFIG}
cat <<EOF > /tmp/${OE_CONFIG}
[Unit]
Description=Client_libre_breathing_ventilator
Requires=${OE_SRV}.service
[Service]
Type=simple
SyslogIdentifier=${OE_USER}
PermissionsStartOnly=true
User=${OE_USER}
Group=${OE_USER}
Restart=always
RestartSec=5
ExecStart=${OE_HOME_lbv}/os_rpi/systemd/runService.sh
StandardOutput=journal+console
[Install]
WantedBy=multi-user.target
EOF

echo -e "* Security Init File"
sudo cp /tmp/${OE_CONFIG} /etc/systemd/system/${OE_CLIENT}.service
sudo chmod 755 /etc/systemd/system/${OE_CLIENT}.service
sudo chown root: /etc/systemd/system/${OE_CLIENT}.service
