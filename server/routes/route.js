const express = require('express');
const app = express.Router();
const servicefile = require('../services/service')
const controllerfile = require('../controller/controller')
app.get('/',servicefile.contact)
app.get('/tq',servicefile.thankyou)
app.post('/submit',controllerfile.matching)

module.exports = app  