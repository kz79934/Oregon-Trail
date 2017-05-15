<?php

	$host= 'studentdb-maria.gl.umbc.edu';
	$user= 'ej77536';
	$pass= 'ej77536';
	$db= 'ej77536';
	$con = mysqli_connect($host,$user,$pass);

	mysqli_select_db($con, $db);

		$score = [];
		$tombstone = [];
		
	if ($con)
	{
		$sql = "SELECT * FROM high_score";
		$query=mysqli_query($con,$sql);

		while ($row = $query->fetch_assoc()){

			$score[] = $row;
		
		}
		
		$sql2 = "SELECT * FROM tombstone";
		$query2=mysqli_query($con,$sql2);
		
		while ($row2 = $query2->fetch_assoc()){

			$tombstone[] = $row2;
		
		}
	}
//	$json_score = json_encode($score);

mysqli_close($con);
?>


<html>
<head>
    <link rel="stylesheet" type="text/css" href="game.css">
<title>Oregon Trail Super Deluxe 3rd Strike Hyper Combo Edition Version 2.07</title>
</head>
<body>
	<div id="main"></div>
	<div id="main2"></div>
	<!-- <script src="game.js"></script> -->
	<script>
		var t = "<p id='demo' style='color:white;'></p><p id='demo2'style='color:white;'></p><p id='demo3' style='color:white;'></p><p id='demo4'style='color:white;'></p><p id='demo5' style='color:white;'></p><p id='demo6'style='color:white;'></p><p id='demo7' style='color:white;'></p>";
				
		document.getElementById("main2").innerHTML = t;
	
		var score = <?php echo json_encode($score); ?>;
		var tombstone = <?php echo json_encode($tombstone); ?>;
		
		len = score.length;
		len2 = tombstone.length;
		

		var arrScore = [];
		var arrName = [];

		for (var i = 0; i < len; i++){
			arrScore.push(score[i].score);
			arrName.push(score[i].name);

		}

		var tombMsg = [];
		var tombPrev = [];
		var tombNext = [];
		var tombName = [];
		var tombMiles = [];
		
		for (var j = 0; j < len2; j++){
			tombMsg.push(tombstone[j].message);
			tombPrev.push(tombstone[j].prevLocation);
			tombNext.push(tombstone[j].nextLocation);
			tombName.push(tombstone[j].leaderName);
			tombMiles.push(tombstone[j].miles);

		}
		/*		
		document.getElementById("demo").innerHTML = "score:: " + arrScore;
		document.getElementById("demo2").innerHTML = "name:: " + arrName + "<br>";
		
		document.getElementById("demo3").innerHTML = "tomb message:: " + tombMsg;
		document.getElementById("demo4").innerHTML = "tomb prev location:: " + tombPrev;
		document.getElementById("demo5").innerHTML = "tomb next location:: " + tombNext;
		document.getElementById("demo6").innerHTML = "tomb leader name:: " + tombName;
		document.getElementById("demo7").innerHTML = "tomb miles:: " + tombMiles;
		*/
		
	</script>
	<script src="game1.js"></script>
	<script src="game2.js"></script>
	<script src="game3.js"></script>
	<script src="mainGame.js"></script>
	<script src ='columbia/RiverGame.js'></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

	
</body>
</html>
