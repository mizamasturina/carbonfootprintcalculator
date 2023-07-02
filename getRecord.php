<?php 
	
	require 'config.php';


	if(isset($_POST['record'])){


		$sql = "SELECT * FROM record";
		$result = mysqli_query($conn, $sql);
		if (mysqli_num_rows($result) > 0) {

			$row = $result->fetch_all();
			$result = array();
			foreach($row as $key => $val) {
			 	
			 	$result[$key]['id'] = $val[0];
			 	$result[$key]['fname'] = $val[1];
			 	$result[$key]['lname'] = $val[2];
			 	$result[$key]['city'] = $val[3];
			 	$result[$key]['state'] = $val[4];
			 	$result[$key]['roundtransportcf'] = $val[5];
			 	$result[$key]['roundelectriccf'] = $val[6];
			 	$result[$key]['roundfoodcf'] = $val[7];
			 	$result[$key]['roundwatercf'] = $val[8];
			 	$result[$key]['roundtravelcf'] = $val[9];
			 	$result[$key]['roundtotalcf'] = $val[10];
			 	$result[$key]['roundplant'] = $val[11];

			}


			$msg = "Successfully get record";
			echo json_encode(array(
				    'msg' => $msg,
				    'data' => $result,
				    'status' => true
			));

			exit();

		}else{

			$msg = "No Record";
			echo json_encode(array(
				    'msg' => $msg,
				    'data' => 0,
				    'status' => true
			));
			exit();
		}



	}

	if(isset($_POST['feedback'])){


		$sql = "SELECT * FROM feedback";
		$result = mysqli_query($conn, $sql);
		if (mysqli_num_rows($result) > 0) {

			$row = $result->fetch_all();
			$result = array();
			foreach($row as $key => $val) {
			 	
			 	$result[$key]['id'] = $val[0];
			 	$result[$key]['fname'] = $val[1];
			 	$result[$key]['lname'] = $val[2];
			 	$result[$key]['comment'] = $val[3]; 

			}


			$msg = "Successfully get comment";
			echo json_encode(array(
				    'msg' => $msg,
				    'data' => $result,
				    'status' => true
			));

			exit();

		}else{

			$msg = "No Comment";
			echo json_encode(array(
				    'msg' => $msg,
				    'data' => 0,
				    'status' => true
			));
			exit();
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