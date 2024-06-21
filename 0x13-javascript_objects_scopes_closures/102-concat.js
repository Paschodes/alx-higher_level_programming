#!/usr/bin/node
/* a script that concats 2 files. */

const { readFileSync, writeFile } = require('fs');
const { argv } = require('process');

const getContent = (file) => {
  return readFileSync(file, 'utf8');
};

const concated = getContent((argv[2]) + '' + getContent(argv[3]));

writeFile(argv[4], concated, 'utf8', err => {
  if (err) throw err;
});
