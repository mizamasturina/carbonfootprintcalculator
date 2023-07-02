<?php 
	
	require 'config.php';


	if(isset($_POST['submit'])){

		$fname = $_POST['fname'];
		$lname = $_POST['lname'];
		$city = $_POST['city'];
		$state = $_POST['state'];
		$roundtransportcf = $_POST['roundtransportcf'];
		$roundelectriccf = $_POST['roundelectriccf'];
		$roundfoodcf = $_POST['roundfoodcf'];
		$roundwatercf = $_POST['roundwatercf'];
		$roundtravelcf = $_POST['roundtravelcf'];
		$roundtotalcf = $_POST['roundtotalcf'];
		$roundplant = $_POST['roundplant'];


		$sql = "INSERT INTO record (firstname, lastname, city, state, total_transportation_emission_year, total_electric_year, total_food_year, total_water_year, total_travel_year, total_cf_year, total_offset_year) VALUES ('$fname', '$lname', '$city', '$state', '$roundtransportcf', '$roundelectriccf', '$roundfoodcf', '$roundwatercf', '$roundtravelcf', '$roundtotalcf', '$roundplant')";

		if (mysqli_query($conn, $sql)) {
		  	$msg = "Successfully submitted";
		  	returnSuccess($msg);
		} else {
		  	$msg = "Failed to submit";
		  	returnErr($msg);
		}

	}


	if(isset($_POST['feedback'])){

		$fname = $_POST['fname'];
		$lname = $_POST['lname'];
		$comment = $_POST['comment'];
	

		$sql = "INSERT INTO feedback (firstname, lastname, comment) VALUES ('$fname', '$lname', '$comment')";

		if (mysqli_query($conn, $sql)) {
		  	$msg = "Successfully submitted feedback";
		  	returnSuccess($msg);
		} else {
		  	$msg = "Failed to submit feedback";
		  	returnErr($msg);
		}

	}


   
    function returnSuccess($msg){

	  echo json_encode(array(
	    'msg' => $msg,
	    'status' => true
	  ));

	  exit();

	}


	function returnErr($msg){


	  echo json_encode(array(
	    'msg' => $msg,
	    'status' => false
	  ));

	  exit();

	}


?>