'use strict';

const nodemon = require('nodemon');
const ngrok = require('ngrok');
const fs = require('fs');
const exec = require('child_process').exec;

ngrok.connect(8000, (err, url) => {
  if (err) {
    // process.exit(1);
  } else {
    fs.writeFile('.meta.webhooks.url', url);

    // Copy URL to clipboard.
    // exec(`echo "${url}" | xclip -i -selection clipboard`);

    // Open URL in default browser.
    exec(`xdg-open "${url}"`);

    nodemon(`-x 'NGROK_URL=${url} node' ./server.js`);
  }
});
