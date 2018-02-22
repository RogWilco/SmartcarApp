'use strict';

const nodemon = require('nodemon');
const ngrok = require('ngrok');
const fs = require('fs');

ngrok.connect(8000, (err, url) => {
  if (err) {
    process.exit(1);
  } else {
    fs.writeFile('.meta.webhooks.url', url);
    nodemon(`-x 'NGROK_URL=${url} node' ./server.js`);
  }
});
