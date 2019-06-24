// Grabbing express
const express = require('express');

// Opening the port
const PORT = process.env.PORT || 80;

// Calling express
const app = express();

// Setting the app direction
app.use(express.static(`${__dirname}/public`));

// Break apart into JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Grabbing the router
const router = require('./js/controller.js');
// Setting the route to the controller
app.use('/', router);


// Check the port
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});