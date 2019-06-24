DROP DATABASE IF EXISTS sodapops_db;
CREATE DATABASE sodapops_db;
USE sodapops_db;

CREATE TABLE clients(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30),
  email VARCHAR(30),
  phone INT(10),
  comments VARCHAR(250)
);