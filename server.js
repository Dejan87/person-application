const express = require('express');

const app = express();
const mongoose = require("mongoose");
const config = require("./config"); // Node will look for index.js file in config folder by default
//const setupController = require("./controllers/setupController");  Used only for adding some seed data

const port = process.env.PORT || 5000;

// Connect to the database
mongoose.connect(config.getConnectionString());

// After adding some seed data comment out the following line of code so you don't accidentally end up with duplicate data
//setupController(app);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));