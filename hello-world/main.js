const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

function createWindow(){
    win = new BrowserWindow();
    win.loadFile('index.html');
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform != 'darwin'){
        app.quit()
    }
})

app.on('activate', () => {
    if(win == null){
        createWindow()
    }
})