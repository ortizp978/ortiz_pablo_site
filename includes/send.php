<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if ($_POST) {
    $recipient = "pablo.ortiz@pablodesigner.com";
    $subject = 'Email from site';
    $visitor_name         = "";
    $visitor_email        = "";
    $message      = "";
    $fail = array();

    if (isset($_POST['firstname']) && !empty($_POST['name'])) {
        $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
    }else{
        array_push($fail, "name");
    }

    if (isset($_POST['email']) && !empty($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $visitor_email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }else{
        array_push($fail, "email");
    }

    if (isset($_POST['msg']) && !empty($_POST['msg'])) {
        $clean = filter_var($_POST['msg'], FILTER_SANITIZE_STRING);
        $message = htmlspecialchars($clean);
    }else{
        array_push($fail, "msg");
    }

    $headers = "From: " . $visitor_email . "\r\n" .
    "Reply-To: "  . $visitor_email .  "\r\n" .
    "X-Mailer: PHP/" . phpversion();
    
    if (count($fail)==0) {
        mail($recipient, $subject, $message, $headers);
        $results['message'] = sprintf('Thank you for contacting us, %s. You will get a reply within 24 hours', $visitor_name);
    } else {
        header('HTTP/1.1 488 You Did NOT fill out the form correctly');
        die(json_encode(["msg" => $fail]));
    }
} else {
    $results['msg'] = 'No submission';
}

echo json_encode($results);

?>