<?php
$host = "localhost";
$user = "root";
$password = "";
$db = "test";

$con = mysqli_connect($host, $user, $password, $db);

$run = null;
$approx = "";

if (isset($_POST['search'])) {
    $approx = $_POST['approx'];

    
    $sql = "SELECT buildtype, approx, cpu, gpu, ram, mobo, psu 
            FROM bsss 
            WHERE approx = '$approx' 
            ORDER BY approx ASC"; 
    $run = mysqli_query($con, $sql);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PC Search</title>
    <link rel="stylesheet" href="guides.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>

<div id="nav">
    <div class="nav-section left" id="logo"></div>
    <div class="nav-section center" id="links">
        <a href="index.html">Home</a>
        <a href="buildPC.html">Build PC</a>
        <a href="buildsuggest.html">Pre-Build Suggesions</a>
        <a href="guides.html">Guides</a>
        <a href="comunity.html">Community</a>
        <a href="#">Support</a>
    </div>
    <div class="nav-section right">
        <div id="search-container">
            <i class="fa fa-search"></i>
            <input type="search" placeholder="Search here ...">
        </div>
        <div id="user">
            <a href="./login.html"><i class="fa-solid fa-user-plus"></i></a>
        </div>
        <div id="cart">
            <a href="./cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
    </div>
</div>

<!-- Nav End -->

<div class="titlee">
    <h1>Provide your budget, and we will recommend the most suitable PC components for you.</h1>
</div>

<div class="searchh">
    <form action="guides.php" method="post">
        <input type="text" class="approx" id="approx" name="approx" placeholder="Enter your Budget">
        <input type="submit" value="Search" class="btn" name="search">
    </form>
</div>


<div class="list">
    <table border= "1" cellpadding="10" cellspacing="0">
        <?php
if ($run && mysqli_num_rows($run) > 0) {
    echo "<h2>Search Results for budget: $approx</h2>";
    echo "<table border='1' cellpadding='5'>
            <tr>
                <th>Build Type</th>
                <th>Approx</th>
                <th>CPU</th>
                <th>GPU</th>
                <th>RAM</th>
                <th>MOBO</th>
                <th>PSU</th>
            </tr>";
    while ($row = mysqli_fetch_assoc($run)) {
        echo "<tr>
                <td>".$row['buildtype']."</td>
                <td>".$row['approx']."</td>
                <td>".$row['cpu']."</td>
                <td>".$row['gpu']."</td>
                <td>".$row['ram']."</td>
                <td>".$row['mobo']."</td>
                <td>".$row['psu']."</td>
              </tr>";
    }
    echo "</table>";
} elseif (isset($_POST['search'])) {
    echo "<p>No data found for budget: $approx</p>";
}
?>

    </table>

</div>

</body>
</html>
