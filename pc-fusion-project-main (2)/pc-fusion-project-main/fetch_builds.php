<?php

$host = "localhost";
$user = "root";
$password = "";
$db = "test";

$con = mysqli_connect($host, $user, $password, $db);

if (!$con) {
    die("Database connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM community_builds ORDER BY id DESC";
$result = mysqli_query($con, $sql);

$builds = [];

while($row = mysqli_fetch_assoc($result)){
    $builds[] = $row;
}

echo json_encode($builds);
?>
