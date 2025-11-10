<?php
// Simple contact handler (configure before using on a live server).
// This script will attempt to send an email using PHP's mail() function.
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = strip_tags($_POST['name'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $message = strip_tags($_POST['message'] ?? '');

    if(!$name || !$email || !$message){
        http_response_code(400);
        echo 'Please fill all fields.';
        exit;
    }

    $to = 'yakiynadtrian@gmail.com'; // <<< change to your email
    $subject = 'Contact from portfolio: ' . $name;
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = 'From: ' . $email . "\r\n" . 'Reply-To: ' . $email;

    if(mail($to, $subject, $body, $headers)){
        echo 'Thanks, message sent.';
    } else {
        http_response_code(500);
        echo 'Failed to send message. Configure PHP mail on server.';
    }
} else {
    http_response_code(405);
    echo 'Method Not Allowed';
}
?>