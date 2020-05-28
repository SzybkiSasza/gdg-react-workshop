import { app, BrowserWindow } from 'electron';
import * as reload from 'electron-reloader';
import * as path from 'path';
import * as url from 'url';

// Prepare live reload
try {
  reload(module);
} catch (err) {
  console.log('Error encountered during hot reload!', err);
}

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1280, height: 1024, x: 0, y: 0 });

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, '/../public/index.html'),
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
