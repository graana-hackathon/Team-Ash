<?php


header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");


$servername = "localhost";
$username = "id12840883_graana";
$password = "graana";
$dbname = "id12840883_graana";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$type=$_GET['type'];
$budget=$_GET['budget'];
$locality=$_GET['locality'];


if($type == 'house'){

    $bedrooms=$_GET['bedrooms'];

    $sql = "SELECT * FROM properties 
                    where 
                    type = 'house'
                    and demandPrice < $budget
                    and bedrooms >= $bedrooms
                    and locality = '$locality'" ;
}
                
if($type =='plot'){
    $size=$_GET['size'];
    $sql = "SELECT * FROM properties 
                where 
                type = 'plot' 
                and demandPrice < $budget
                and size > $size
                and locality = '$locality'" ;
}
                
                
$result = $conn->query($sql);
if(!$result){
    echo("Error description: " . $conn -> error);
    exit();
}


$resultarray=array();
if ($result->num_rows > 0) {
    while($row=$result->fetch_assoc()){
        array_push($resultarray, $row);
    }
    echo(json_encode($resultarray));
    
}
else {
    echo('{}');
}
$conn->close();


?>
