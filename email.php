<?php
// Perform server-side validation
if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        // Email is valid, so send it
        $to = 'fearonlewis@yahoo.com';
        $subject = 'New message from your website';
        $headers = 'From: ' . $_POST['name'] . ' <' . $_POST['email'] . '>';
        $message = $_POST['message'];

        if (mail($to, $subject, $message, $headers)) {
            echo 'Message sent successfully';
        } else {
            echo 'An error occurred while sending the message';
        }
    } else {
        // Email is not valid
        echo 'Please enter a valid email address';
    }
} else {
    // Required fields are missing
    echo 'Please fill in all required fields';
}
