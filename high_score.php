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
	
		$num = $_POST['scorePage'];
		$playerName = mysqli_real_escape_string($con, $_REQUEST['pageInput']);
		
		$sql = "INSERT INTO high_score(score, name) VALUES ($num, '$playerName')";
		$query = mysqli_query($con,$sql);

	}
	
	mysqli_close($con);

?>

<html>
<body>
<h1>Thanks for playing!</h1>
<button onclick="window.location.href='game.php'">Back to main</button>
</body>
</html>