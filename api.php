<?php
$host = "localhost";    /* Host name */
$user = "root";         /* User */
$password = "Nigeria2013!";         /* Password */
$dbname = "InterventionDB";   /* Database name */

// Create connection
$conn = new mysqli("localhost", "root", "Nigeria2013!", "InterventionDB");

if ($conn->connect_error) {
	die("Database connection established Failed..");
}
$res = array('error' => false);

$action = 'read';

if (isset($_GET['action'])) {
	$action = $_GET['action'];
}

if ($action == 'read') {
	$result = $conn->query("SELECT * FROM `intervention`");
	$intervention = array();

	while ($row = $result->fetch_assoc()){
		array_push($intervention, $row);
	}

	$res['intervention'] = $intervention;
}

if ($action == 'create') {

	$date = $_POST['date'];
  $nameDemandeur = $_POST['nameDemandeur'];
  $surnameDemandeur = $_POST['surnameDemandeur'];
	$company = $_POST['company'];
	$email = $_POST['email'];
	$number = $_POST['number'];
	$address = $_POST['address'];
	$nameIntervenant = $_POST['nameIntervenant'];
	$surnameIntervenant = $_POST['surnameIntervenant'];
	$isSigned = $_POST['isSigned'];

	$insertQuery = "INSERT INTO intervention(`date`, `nameDemandeur`, `surnameDemandeur`,`company`, `email`, `number`, `address`, `nameIntervenant`, `surnameIntervenant`, `isSigned`)VALUES('".
	$date."','".$nameDemandeur."','".$surnameDemandeur."','".$company."','".$email."','".$number."','".$address."','".$nameIntervenant."','".$surnameIntervenant."','".$isSigned."')";

	$result = $conn->query($insertQuery);
	if ($result) {
		$res['message'] = "Intervention Added successfully";
	} else{

  	echo("Error description: " . mysqli_error($conn));
		$res['error'] = true;
		$res['message'] = "Insert Intervention failed";
	}
}

if ($action == 'update') {

	$id = $_POST['id'];
	$date = $_POST['date'];
  $nameDemandeur = $_POST['nameDemandeur'];
  $surnameDemandeur = $_POST['surnameDemandeur'];
	$company = $_POST['company'];
	$email = $_POST['email'];
	$number = $_POST['number'];
	$address = $_POST['address'];
	$nameIntervenant = $_POST['nameIntervenant'];
	$surnameIntervenant = $_POST['surnameIntervenant'];
	$isSigned = $_POST['isSigned'];

	$result = $conn->query("UPDATE `intervention` SET `company`='".$company."', `nameDemandeur`='".$nameDemandeur.
	"',`surnameDemandeur`='".$surnameDemandeur."',`email`='".$email."',`number`='".$number.
	"',`address`='".$address."',`nameIntervenant`='".$nameIntervenant."',`surnameIntervenant`='".$surnameIntervenant.
	"',`isSigned` ='".$isSigned."' WHERE id=".$id);
	if ($result) {
		$res['message'] = "User Updated successfully";
	} else{
		$res['error'] = true;
		$res['message'] = "User Update failed";
	}
}

if ($action == 'delete') {
	$id = $_POST['id'];

	$result = $conn->query("DELETE FROM `intervention` WHERE `id` = '$id'");
	if ($result) {
		$res['message'] = "User deleted successfully";
	} else{
		$res['error'] = true;
		$res['message'] = "User delete failed";
	}
}

$conn -> close();
header("Content-type: application/json");

foreach($res as &$v) {
  $v['intervention'] = utf8_encode($v['intervention']);
}
echo json_encode($res);

die();

 ?>
