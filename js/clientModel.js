// Grabbing the ORM file
const orm = require('./orm.js');

// Burger Model
const client = {

  insertOne(name, callback) {
    orm.insertOne(name, (res) => {
      callback(res);
    });
  },
};

// Export
module.exports = client;