'use strict';

const alter = require('./mod/read');
const event = require('./events/event');



const net = require('net');
const server = net.createServer();

server.listen(3001, () => console.log('Listening on PORT 3001'));

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

let file = process.argv.slice(2).shift();
alterFile(file);
