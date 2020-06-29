<?php

define("DBHOST","localhost");
define("DBUSERNAME","root");
define("DBPASSWORD","");
define("DBNAME","loan");

$con = mysqli_connect(DBHOST, DBUSERNAME, DBPASSWORD, DBNAME);

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

?>