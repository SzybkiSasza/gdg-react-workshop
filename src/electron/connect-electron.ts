import * as net from 'net';
import * as childProcess from 'child_process';

// Adjust port so that Electron hits React
const port: number = process.env.PORT ? Number.parseInt(process.env.PORT, 10) - 100 : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();
let startedElectron = false;

const tryConnection = () => {
  client.connect(
    { port },
    () => {
      client.end();

      if (!startedElectron) {
        startedElectron = true;
        console.log('starting electron');

        childProcess.exec('electron . --inspect=5858', {
          windowsHide: true
        });

        // Leave the process running for Electron hot reload
        while(true) {} // eslint-disable-line no-constant-condition, no-empty
      }
    }
  )
};

tryConnection();

client.on('error', (err) => {
  console.log('Retrying...', err);
  setTimeout(tryConnection, 1000);
});
