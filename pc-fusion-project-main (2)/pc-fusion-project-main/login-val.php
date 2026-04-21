<?php

include 'connect.php';


if(isset($_POST['email']) && isset($_POST['pass'])){
    $email = $_POST['email'];
    $pass = $_POST['pass'];

    
    $query = "SELECT * FROM information WHERE email='$email' AND pass='$pass'";
    $result = mysqli_query($con, $query);

    if(mysqli_num_rows($result) > 0){

      echo "<script> window.location.href='index.html'; </script>";
      

    } else {

      echo "<script>alert('Invalid email or password'); window.location.href='login.html';</script>";

    }
}

?>
