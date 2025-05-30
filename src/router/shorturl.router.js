const express = require("express");
const { shortenController } = require("../controllers");
// const { v4: uuidv4 } = require('uuid');
const shortUrlRouter = express.Router();

const validateUrl = require('../middleware/validateUrl'); //validate-gpt

shortUrlRouter.post('/',  validateUrl,  shortenController);


module.exports = shortUrlRouter;
