import { app, BrowserWindow, Menu, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';

import menuTemplate from './menu';

let mainWindow: BrowserWindow | null;

function createWindow() {
  const displays = screen.getAllDisplays()
  const externalDisplay = displays.find((display) => {
    return display.bounds.x !== 0 || display.bounds.y !== 0
  });

  let mainWindow;
  if (externalDisplay) {
    mainWindow = new BrowserWindow({
      width: 1280, height: 1024,
      x: externalDisplay.bounds.x + 50,
      y: externalDisplay.bounds.y + 50
    });
  } else {
    mainWindow = new BrowserWindow({
      width: 1280, height: 1024,
      x: 50,
      y: 50
    });
  }

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, '../index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  mainWindow.on('closed', () => {
    mainWindow = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
});
