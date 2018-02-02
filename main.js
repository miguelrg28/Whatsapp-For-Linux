const electron = require('electron')

const app = electron.app

const BrowserWindow = electron.BrowserWindow
const path = require('path');
const nativeImage = electron.nativeImage;

let demoIcon = nativeImage.createFromPath(path.join(__dirname, 'assets','png','icon.png'));
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 1100, height: 900, icon: demoIcon})

  mainWindow.loadURL("https://web.whatsapp.com/");
  mainWindow.setTitle("Whatsapp for Linux");

  mainWindow.on('closed', function () {

    mainWindow = null
  })
}


app.on('ready', createWindow)

app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})
