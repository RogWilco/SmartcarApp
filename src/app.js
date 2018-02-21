'use strict';

const express 		= require('express');
const router		= express.Router();
const bodyParser	= require('body-parser');
const hooks			= require('./hooks');

// Parse request bodies as JSON.
router.use(bodyParser.json());

// Initialize Application
var app = express();

// Configure Routes
app.use('/hooks', hooks);

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

/**
 * View current configuration.
 *
 * @param {express.request} req the HTTP request object
 * @param {express.response} res the HTTP response object
 *
 * @return void
 */
app.get('/config', (req, res) => {

});

/**
 * Set configuration values.
 *
 * @param {express.request} req the HTTP request object
 * @param {express.response} res the HTTP response object
 *
 * @return void
 */
app.post('/config', (req, res) => {

});

module.exports = app;
