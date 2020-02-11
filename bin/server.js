'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');

const app = require('../src/app');
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

console.log('Teste Node');

server.listen(port);
server.on('error', onError);
server.on('listening', onListening)

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe' + port :
        'Port' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated previleges');
            process.exit(1);
            break;

        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'pipe' + addr :
        'port' + addr.port;
    debug('Listening on ' + bind);
}

