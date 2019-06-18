'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => console.log('Socket in logger.js'));
