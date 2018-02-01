# Whatsapp-For-Linux

## What is it? | ¿Que es esto?
This is a unnoficial version of Whatsap for linux.

## Install NodeJS | Instalar NodeJS

    curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
    sudo apt-get install -y nodejs

## Install Electron y Packager | Instalar Electron y Packager

    npm install electron --save-dev
    npm install electron-packager --save-dev
    
## For Compile | Para compilar
    Windows (32 bits): npm run build-win32
    Windows (64 bits): npm run build-win64
    Linux: npm run build-linux
    Mac: npm run build-mac
