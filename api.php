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
		$res['message'] = "Ajout de l'intervention effectué avec succés";
	} else{
		$res['error'] = true;
		$res['message'] = "Erreur sur l'insertion de l'intervention";
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
		$res['message'] = "Modification effectuée avec succés";
	} else{
		$res['error'] = true;
		$res['message'] = "Erreur sur la modification de l'intervention";
	}
}

if ($action == 'delete') {
	$id = $_POST['id'];

	$result = $conn->query("DELETE FROM `intervention` WHERE `id` = '$id'");
	if ($result) {
		$res['message'] = "Suppression effectuée avec succés";
	} else{
		$res['error'] = true;
		$res['message'] = "Erreur de suppression de l'intervention";
	}
}

$conn -> close();
header("Content-type: application/json");

foreach($res as &$v) {
  $v['intervention'] = utf8_encode($v['intervention']);
}
echo json_encode( $res, JSON_UNESCAPED_UNICODE );

die();

 ?>
