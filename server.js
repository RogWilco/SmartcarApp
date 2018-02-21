'use strict';

/**
 * Server wrapper script for running a local server. Using defaults,
 * server can be accessible at:
 *
 * 		http://localhost:8080/
 */

var app = require('./src/app.js');
var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('localhost server listening on port ' + port);
});
