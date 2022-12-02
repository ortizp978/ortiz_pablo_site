<?php

    // Set up conection creds

    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $user = "u578555810_pablo_ortiz";
    $pass = "Noviembre25*";
    $url = "localhost";
    $db = "u578555810_db_portfolio";

    // Connect to our db

    $link = mysqli_connect($url, $user, $pass, $db);
    //echo($link);

    // Check our connection

    if(!$link) {
        error_log("Connection error: " . mysqli_connect_error());
    }

?>