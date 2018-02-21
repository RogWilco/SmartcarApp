'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

/**
 * OAuth 2.0 callback endpoint.
 *
 * @param  {express.request}   request   the HTTP request object
 * @param  {express.response}  response  the HTTP response object
 *
 * @return {void}
 */
router.get('/oauth', (req, res) => {

});

/**
 * Webhooks notification endpoint.
 *
 * @param  {express.request}   request   the HTTP request object
 * @param  {express.response}  response  the HTTP response object
 *
 * @return {void}
 */
router.get('/notify', (req, res) => {
    // Validate Callback Request



});

module.exports = router;
