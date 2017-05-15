<?php

	$host= 'studentdb-maria.gl.umbc.edu';
	$user= 'ej77536';
	$pass= 'ej77536';
	$db= 'ej77536';
	$con = mysqli_connect($host,$user,$pass);

	mysqli_select_db($con, $db);
		
	if ($con)
	{
		//echo 'could not connected';
	
		$prev_Location = $_POST['prevLocation'];
		$next_Location = $_POST['nextLocation'];
		$leader_Name = $_POST['leaderName'];
		$temp_Traveled = $_POST['tempTraveled'];
		$msg_Input = mysqli_real_escape_string($con, $_REQUEST['messageInput']);
		
		$sql = "INSERT INTO tombstone(message, prevLocation, nextLocation, leaderName, miles) VALUES ('$msg_Input', '$prev_Location', '$next_Location', '$leader_Name', '$temp_Traveled')";
		$query = mysqli_query($con,$sql);

	}
	
	mysqli_close($con);

?>

<html>
<head>
	<link rel="stylesheet" type="text/css" href="game.css">
</head>
<body>
<h1>Thanks for playing!</h1>
<button class='button' onclick="window.location.href='game.php'">Play Again</button>
</body>
</html>