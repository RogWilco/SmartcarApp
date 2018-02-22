'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const compass = require('compass');
const bodyParser = require('body-parser');
const hooks = require('./hooks');

// Parse request bodies as JSON.
router.use(bodyParser.json());

// Initialize Application
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('/pub'));

// Configure Routes
app.use('/hooks', hooks);

/**
 * Web root.
 *
 * @param {express.request} req the HTTP request object
 * @param {express.response} res the HTTP response object
 *
 * @return void
 */
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Tripalytics',
    testing: 'Testing',
  });
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
  res.render('index', {
    title: 'Tripalytics :: Configuration',
  });
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
