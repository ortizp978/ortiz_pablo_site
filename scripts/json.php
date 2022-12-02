<?php
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    header("Access-Control_Allow_Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    require_once("config.php");

    $label = "name";
    
    //Return all results
    $getContent = getAll('tbl_portfolio');

   // $getContent = getSingle('tbl_portfolio', 'portfolio_id', '2');
    

    //$grpResult = "";
    //$grpResult .= "{";
    /*if(!is_string($getContent)) {
        while($conResult = mysqli_fetch_assoc($getContent)){
            $jsonResult = "\"".$conResult[$label]."\"".": ".json_encode($conResult, JSON_PRETTY_PRINT);
            $grpResult .= $jsonResult.",";
        }
        $grpResult = substr($grpResult, 0, -1);
        $grpResult .= "}";
        echo $grpResult;
    }else{
        echo $getContent;
    }*/

    if(!is_string($getContent)) {
        //Working object
        $result = [];
        while($conResult = mysqli_fetch_assoc($getContent)) {
           $result[$conResult[$label]] = $conResult;
        }
        echo json_encode($result, JSON_PRETTY_PRINT);
    }else{
        //Error Message
        echo $getContent;
    }


?>