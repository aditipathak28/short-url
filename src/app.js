const express = require('express');
const router = require('./router');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

app.use('/', router);






module.exports = app ;