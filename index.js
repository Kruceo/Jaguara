const {BrowserWindow,app} =  require('electron')
const path = require('path')


app.on('ready',()=>
{

let mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    resizable: false,
    transparent: true,
    autoHideMenuBar: true,
    webPreferences:
    {
        nodeIntegration: true,
        contextIsolation: true,
        preload: path.resolve('preload.js')
    }
})
    mainWindow.webContents.openDevTools()
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})