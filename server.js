const express = require('express');

const app = express();
const mongoose = require("mongoose");
const config = require("./config"); // Node will look for index.js file in config folder by default
const apiController = require("./controllers/apiController");
//const setupController = require("./controllers/setupController");  Used only for adding some seed data

const port = process.env.PORT || 5000;

// Connect to the database
mongoose.connect(config.getConnectionString());

// After adding some seed data comment out the following line of code so you don't accidentally end up with duplicate data
//setupController(app);

// Make Express app aware of all those endpoints
apiController(app);

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));