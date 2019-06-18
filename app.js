'use strict';

const fs = require('fs');


const read = require('./mod/read');
const write = require('./mod/write');
const upper = require('./mod/upper');


const alterFile = (file) => {
  read(file)
    .then(data => {
      write(file, Buffer.from(upper(data)));
    });
};

let file = process.argv.slice(2).shift();
alterFile(file);
