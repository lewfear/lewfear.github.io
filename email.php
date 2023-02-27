<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle POST request
    if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
        // ...perform validation and send email...
        echo 'Your message has been sent successfully!';
    } else {
        echo 'Please fill in all required fields';
    }
} else {
    // Handle other HTTP methods (if necessary)
    header('Allow: POST');
    http_response_code(405);
    echo 'Method Not Allowed';
}
