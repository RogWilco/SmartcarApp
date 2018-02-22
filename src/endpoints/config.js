'use strict';

const _ = require('lodash');
const bodyParser = require('body-parser');
const express = require('express');
const endpoint = express.Router();
const defaultServiceConfig = require('../../etc/defaults.service.json');

var serviceConfig = _.cloneDeep(defaultServiceConfig);

endpoint.use(bodyParser.json());

/**
 * View current configuration.
 *
 * @param {express.request} req the HTTP request object
 * @param {express.response} res the HTTP response object
 *
 * @return void
 */
endpoint.get('/', (req, res) => {
  res.send(serviceConfig);
});

/**
 * Create new configuration.
 *
 * @param {express.request} req the HTTP request object
 * @param {express.response} res the HTTP response object
 *
 * @return void
 */
endpoint.post('/', (req, res) => {
  // Reset config to defaults.
  serviceConfig = _.cloneDeep(defaultServiceConfig);

  // Apply new values.
  _.extend(serviceConfig, req.body);

  res.send(serviceConfig);
});

/**
 * Update current configuration.
 *
 * @param {express.request} req the HTTP request object
 * @param {express.response} res the HTTP response object
 *
 * @return void
 */
endpoint.patch('/', (req, res) => {
  // Apply new values.
  _.extend(serviceConfig, req.body);

  res.send(serviceConfig);
});

/**
 * Clear current configuration.
 *
 * @param {express.request} req the HTTP request object
 * @param {express.response} res the HTTP response object
 *
 * @return void
 */
endpoint.delete('/', (req, res) => {
  // Reset config to defaults.
  serviceConfig = _.cloneDeep(defaultServiceConfig);

  res.send(serviceConfig);
});

module.exports = endpoint;
