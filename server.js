const express = require('express');

const app = express();
const mongoose = require("mongoose");
const config = require("./config"); // Node will look for index.js file in config folder by default

const port = process.env.PORT || 5000;

// Connect to the database
mongoose.connect(config.getConnectionString());

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));