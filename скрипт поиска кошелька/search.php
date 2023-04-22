<?php
    $hm = 'localhost';
    $db = 'database';
    $un = 'root';
    $pw = 'root';

    $mysqli = new mysqli($hm, $un, $pw, $db);
    $mysqli->set_charset("utf8");

    $query = "SELECT * FROM `table` WHERE `category` = '".($_POST['ctegory'])."'";
    $result = $mysqli->query($query);

    $data = '';
    foreach ($result as $value){
        $data .= #тут строите таблицу, или что вам нужно, в html формате;
    } 
    echo $data;
?>