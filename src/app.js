'use strict';

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const endpointConfig = require('./endpoints/config');
const endpointReports = require('./endpoints/reports');
const endpointHooks = require('./endpoints/hooks');

// Initialize Application
var app = express();

// Parse request bodies as JSON.
app.use(bodyParser.json());

// Configure Routes
app.use('/config', endpointConfig);
app.use('/reports', endpointReports);
app.use('/hooks', endpointHooks);

/**
 * Root endpoint.
 *
 * @param {express.request} req the HTTP request object
 * @param {express.response} res the HTTP response object
 *
 * @return void
 */
app.get('/', (req, res) => {
  res.sendStatus(200);
	// Show status?
});

module.exports = app;
