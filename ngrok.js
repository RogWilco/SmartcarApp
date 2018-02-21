'use strict';

const nodemon = require('nodemon');
const ngrok = require('ngrok');

ngrok.connect(8080, (err, url) => {
  if (err) {
    console.error('Error opening ngrok tunnel', err);
    process.exit(1);
  } else {
    console.log('Ngrok tunnel opened at ' + url);
    nodemon(`-x 'NGROK_URL=${url} node' ./server.js`);
  }
});
