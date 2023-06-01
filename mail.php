<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$number = $_POST['number'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "baiolemi@gmail.com";

mail($recipient, $subject, $message, $mailheader, $number)
or die("Error!");

echo"test"
?>