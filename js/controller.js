// Grabbing express
const express = require('express');

// Calling the router
const router = express.Router();
// Calling the burger file
const client = require('./clientModel');


// Communicating with the DB
// Default page of Index
router.get('/', (req, res) => {
  res.redirect('/');
});


// When creating a new client
router.post('/client/create', (req, res) => {
  burger.insertOne(req.body.client, () => {
    res.redirect('/index');
  });
});


// Export
module.exports = router;