<?php

// connect to mysqli
$servername = "localhost";

// Create connection
$conn = new mysqli($servername);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// create the database
$sql = "CREATE DATABASE sodaDB";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();
?>
