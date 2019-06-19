'use strict';

const alter = require('./mod/read');
const event = require('./events/event');

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => console.log('Socket in app.js connected'));


const alterFile = (file) => {
  alter.readFile(file)
    .then(data => {
      data = alter.upper(data);
      alter.writeFile(file, data);
    })
    .then(client.write(payload('saved')))
    .catch(error =>{
      client.write(payload('error'));
    });
  // .catch((error) => {
  //   console.error(error);        // Trying to get error to work
  //   event.emit('error', 'error');
  // });
};

const payload = (event) => {
  let payload = {
    name: event,
    data: `A ${event} event just happened!!`,
  };
  return JSON.stringify(payload);
};


let file = process.argv.slice(2).shift();
alterFile(file);
