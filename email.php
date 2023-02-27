<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle POST request
    if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
        $to = 'you@example.com';
        $subject = 'New message from your website';
        $headers = 'From: ' . $_POST['name'] . ' <' . $_POST['email'] . '>';
        $message = $_POST['message'];
        if (mail($to, $subject, $message, $headers)) {
            echo 'Your message has been sent successfully!';
        } else {
            echo 'There was an error sending your message';
        }
    } else {
        echo 'Please fill in all required fields';
    }
} else {
    // Handle other HTTP methods (if necessary)
    header('Allow: POST');
    http_response_code(405);
    echo 'Method Not Allowed';
}
