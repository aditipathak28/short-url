const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome! Your server is up and running.');
});


module.exports = app ;