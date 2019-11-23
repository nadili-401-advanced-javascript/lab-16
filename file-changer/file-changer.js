'use strict';

const fs = require('fs');
const util = require('util');
// const emitter = require('./emitter.js');
const faker = require('faker');

const rf = typeof fs.readFile === 'function' ?
  util.promisify(fs.readFile) :
  async function () {
    throw new Error('Invalid operation.');
  };

const wf = typeof fs.writeFile === 'function' ?
  util.promisify(fs.writeFile) :
  async function () {
    throw new Error('Invalid operation.');
  };

// read file
const readFile = async (file) => {
  return await rf(file);
};


//write file
const writeFile = async (file) => {
  let newLoremString = faker.lorem.sentence();
  return await wf(file, newLoremString);
};

//alter file 
const alterFile = async (file) => {
  
  await readFile(file);
  await writeFile(file);
};

module.exports = { readFile, writeFile, alterFile };
