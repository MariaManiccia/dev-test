<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$comments = $_POST['comments'];


                // create connection
                $conn = new mysqli ('localhost','root','','sodapops_db');

                if ($conn->connect_error){
                    die('Connection failed : '.$conn-connect_error);
                }
                else {
                    $stmt = $conn->prepare("insert into clients(name, email, phone, comments)
                    values(?, ?, ?, ?)");

                    $stmt->bind_param("sssssi",$name, $email, $phone, $comments);
                    $stmt->execute();
                    echo "New Client Added!";
                    $stmt->close();
                    $conn->close();
                }

?>
