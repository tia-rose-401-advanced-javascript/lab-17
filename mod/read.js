'use strict';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


const upper = (data) => {
  return data.toString().toUpperCase();
};

module.exports = {readFile, writeFile, upper};
