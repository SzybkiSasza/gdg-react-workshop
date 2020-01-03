import * as net from 'net';
import * as childProcess from 'child_process';

const port: number = process.env.PORT ? (Number.parseInt(process.env.PORT, 10) - 100) : 3000;

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
        childProcess.exec('npm run electron')
      }
    }
  )
};

tryConnection();

client.on('error', () => {
  setTimeout(tryConnection, 1000)
});
