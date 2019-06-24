// Grabbing the connection
const connection = require('./connection.js');

// Creating the ORM
const orm = {
  // eslint-disable-next-line camelcase
  insertOne(name, callback) {
    connection.query('INSERT INTO clients SET ?',
      {
        name: $name,
        email: $email,
        phone: $phone,
        comments: $comments
      }, (err, result) => {
        if (err) throw err;
        callback(result);
      });
  },
};

// Export
module.exports = orm;