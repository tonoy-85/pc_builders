<?php

$host = "localhost";
$user = "root";
$password = "";
$db = "test";

$con = mysqli_connect($host, $user, $password, $db);

if (!$con) {
    die("Database connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $build_name = mysqli_real_escape_string($con, $_POST['build_name']);
    $build_type = mysqli_real_escape_string($con, $_POST['build_type']);
    $budget = mysqli_real_escape_string($con, $_POST['budget']);
    $cpu = mysqli_real_escape_string($con, $_POST['cpu']);
    $gpu = mysqli_real_escape_string($con, $_POST['gpu']);
    $ram = mysqli_real_escape_string($con, $_POST['ram']);
    $motherboard = mysqli_real_escape_string($con, $_POST['motherboard']);
    $psu = mysqli_real_escape_string($con, $_POST['psu']);
    $description = mysqli_real_escape_string($con, $_POST['description']);

    // Image upload
    $image_name = "";
    if (!empty($_FILES['image']['name'])) {
        $image_name = time() . "_" . basename($_FILES['image']['name']);
        move_uploaded_file($_FILES['image']['tmp_name'], "photos/" . $image_name);
    }

    $sql = "INSERT INTO community_builds 
    (build_name, build_type, budget, cpu, gpu, ram, motherboard, psu, description, image)
    VALUES 
    ('$build_name','$build_type','$budget','$cpu','$gpu','$ram','$motherboard','$psu','$description','$image_name')";

    if (mysqli_query($con, $sql)) {
        header("Location: comunity.html");
        exit();
    } else {
        echo "Error: " . mysqli_error($con);
    }
}
?>