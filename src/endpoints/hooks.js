'use strict';

const express = require('express');
const endpoint = express.Router();
const bodyParser = require('body-parser');

endpoint.use(bodyParser.json());

/**
 * OAuth 2.0 callback endpoint.
 *
 * @param  {express.request}   request   the HTTP request object
 * @param  {express.response}  response  the HTTP response object
 *
 * @return {void}
 */
endpoint.get('/oauth', (req, res) => {

});

/**
 * Webhooks notification endpoint.
 *
 * @param  {express.request}   request   the HTTP request object
 * @param  {express.response}  response  the HTTP response object
 *
 * @return {void}
 */
endpoint.get('/notify', (req, res) => {
    // Validate Callback Request



});

module.exports = endpoint;
