<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$comments = $_POST['comments'];

$server = "localhost";
$user = "root";
$password = "password";
$database = "sodapops";


                // create connection
                $conn = new mysqli ($server, $user, $password, $database);

                if ($conn->connect_error){
                    die('Connection failed : '.$conn-connect_error);
                }
                else {
                    $stmt = $conn->prepare("insert into clients(name, email, phone, comments)
                    values(?, ?, ?, ?)");

                    echo "New Client Added!";
                    $stmt->close();
                    $conn->close();
                }

?>
