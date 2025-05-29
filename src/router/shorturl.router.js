const express = require("express");
const { shortenController } = require("../controllers");
// const { v4: uuidv4 } = require('uuid');
const shortUrlRouter = express.Router();

shortUrlRouter.post('/', shortenController);


module.exports = shortUrlRouter;
