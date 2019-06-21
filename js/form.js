require("dotenv").config();

const mysql = require("mysql");
const inquirer = require("inquirer");

// connect with a mySql database
const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "",
    database: "sodaPops_db"
});

connection.connect(function (err) {
    if (err) throw err;
});