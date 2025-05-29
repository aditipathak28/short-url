const express = require('express');
const v1Router = express.Router() ;
const shortUrlRouter = require('../shorturl.router') ;

v1Router.get('/health', (req, res) => {
  res.send('v1 Server is up and running!');
});

v1Router.use('/shorturl', shortUrlRouter);


module.exports = v1Router ;