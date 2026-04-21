<?php

include 'connect.php';

    $fname = $_POST['fname']; 
    $surname = $_POST['surname']; 
    $dob = $_POST['dob']; 
    $gender = $_POST['gender']; 
    $email = $_POST['email']; 
    $pass = $_POST['pass']; 

    $sql = "INSERT INTO information (fname, surname, dob, gender, email, pass)
            VALUES ('$fname', '$surname', '$dob', '$gender', '$email', '$pass')";

    $run = mysqli_query($con, $sql);

if(!$run){ 
    echo "Data Insert Failed"; 
}else{ 
    header("Location: success.html");
        exit();

    // echo"Data Insertion Successful";
} 
?>


