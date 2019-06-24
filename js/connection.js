// Grabbing MySQL
const mysql = require('mysql');

// Setting up the connection
let connection;

// Connecting to Jaws DB
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Or else connect to my personal DB
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Billyjoel1',
    database: 'sodapops_db',
  });
}

// Check connection
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export
module.exports = connection;