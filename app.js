'use strict';

const alter = require('./mod/read');
const event = require('./events/event');

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => console.log('Socket in app.js connected'));


const alterFile = (file) => {
  alter.readFile(file)
    .then(data => {
      alter.writeFile(file, Buffer.from(alter.upper(data)));
    })
    .then(event.emit('save', 'saved'))
    .catch(function(error) {
      console.error(error);
    });
};

const sendInfo = () => {
  let event = ['save'];
  let payload = {
    name: event,
    data: `A ${event} event just happened!!`,
  };
  client.write(JSON.stringify(payload));
};
sendInfo();

let file = process.argv.slice(2).shift();
alterFile(file);
