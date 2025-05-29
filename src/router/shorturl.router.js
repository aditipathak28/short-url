const express = require("express");
// const { v4: uuidv4 } = require('uuid');
const shortUrlRouter = express.Router();

const shortToLongMap = {};
const longToShortMap = {};


// Utility to generate a random 6-character code
const generateShortCode = () => {
  return Math.random().toString(36).substring(2, 8);
};

shortUrlRouter.post('/', (req, res) => {
  const { longUrl } = req.body;

  const shortCode = generateShortCode();
  const shortUrl = `${req.protocol}://${req.get('host')}/${shortCode}`;

  shortToLongMap[shortCode] = longUrl;
  longToShortMap[longUrl] = shortCode;


  res.status(201).json({
    longUrl,
    shortUrl,
    shortCode,
  });
});


module.exports = shortUrlRouter;
