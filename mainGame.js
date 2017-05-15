//The main game file that has the game travel loop. Also checks for end game (win or lose) and has the travel animation for wagon.

function travelTrail() {
	//if(!checkMove()){ mainGame(); return;}
	randMsg = "";
    day++;
	eatFood();
	//No clothing and bad weather
	if(gameStatus[WEATHER] == COLD || gameStatus[WEATHER] == VERYRAINY){
		if(supplies[CLOTHING] < 5) reduceTeamHP(2*(5-supplies[CLOTHING]));
	}
    if (gameStatus[PACE] == STEADY) {
        totalTraveled += 20;
        tempTraveled += 20;
        addTeamHP(1);
    }
    else if (gameStatus[PACE] == STRENUOUS) {
        totalTraveled += 30;
        tempTraveled += 30;
		reduceTeamHP(2);
    }
    else if (gameStatus[PACE] == GRUELING) {
        totalTraveled += 40;
        tempTraveled += 40;
		reduceTeamHP(5);
    }
	//Random event 20% chance
	if(Math.floor(Math.random() * (5)) == 0){
		randomEvent();
		if(brokenPart < 3){
			if(parts[brokenPart] > 0) {parts[brokenPart]--; supplies[PARTS]--; brokenPart = 3; randMsg += "<br>You replace it with a spare part.";}
			else randMsg+= "<br>You have no spare parts to replace it!";
		}
	}
	//For injured and dying oxen
	else{
		var rand = 8;
		var heal = 5;
		if(job == "Cowboy") {rand+=2; heal-=2;}
		if(Math.floor(Math.random() * (heal)) == 0) oxenInjured = 0;
		if(Math.floor(Math.random() * (rand)) == 0){
			if(oxenInjured) {randMsg = "One of your oxen has died!"; supplies[OXEN]--; oxenInjured = 0;}
			else {oxenInjured = 1; randMsg = "One of your oxen is injured!"}
		}
	}
	changeWeather();
	//Check if they lost
	if(numCharacters == 0) lostGame();
    else if (tempTraveled >= distance[0]) {
		//Check if they won
		if(locType[0] == END){gameDone = 1; currLocation = "Willamette Valley"; displayLocation();}
		else{
			//Ask if they wish to stop here
			totalTraveled = totalTraveled - (tempTraveled - distance[0]);
			//checkTombstone(1);
			//Comment out the rest and uncomment checkTombstone(1) when ready
			tempTraveled = 0;
			currLocation = locations.shift();
			currType = locType.shift();
			distance.shift();
			stopLocation();
			console.log(distance.length);
		}
	}
    else if (!gameDone) mainGame();
	//else if (!gameDone) checkTombstone();
}

/*

function displayTombstone(index, num){
	var t = "<p>"+tombName[index]+"<br><br>"+tombMsg[index]+"</p>" + spaceTxt;
	document.getElementsByClassName("container")[0].innerHTML = t;
	$(document).keypress(function (e) {
        if (e.keyCode == SPACEBAR) {
            $(this).unbind();
            tombMsg.splice(index, 1);
			tombName.splice(index, 1);
			tombPrev.splice(index, 1);
			tombNext.splice(index, 1);
			tombMiles.splice(index, 1);
			checkTombstone(num);
        }
    });
}

function askTombstone(index, num){
	document.getElementsByClassName("container")[0].innerHTML = "<p>You pass over a grave. Would you like to take a closer look?<br>\
	<button id='tombYes' class='button'><span>Yes</span></button><br><button id='tombNo' class='button'><span>No</span></button></p>";
	$("#tombYes").click(function(){
		$(this).unbind();
		$("#tombNo").unbind();
		displayTombstone(index, num);
	});
	$("#tombNo").click(function(){
		$(this).unbind();
		$("#tombYes").unbind();
		tombMsg.splice(index, 1);
		tombName.splice(index, 1);
		tombPrev.splice(index, 1);
		tombNext.splice(index, 1);
		tombMiles.splice(index, 1);
		checkTombstone(num);
	});
}

function checkTombstone(num = 0){
	var i;
	for(i = 0; i < tombMiles.length; i++){
		if(tombPrev[i] == prevLocation && tombNext[i] == locations[0]){
			if(tombMiles[i] <= tempTraveled){ askTombstone(i, num); return;}
		}
	}
	if(num){
		tempTraveled = 0;
		currLocation = locations.shift();
		currType = locType.shift();
		distance.shift();
		console.log(distance.length);
		stopLocation();
	}
	else mainGame();
}
*/

function walk(){
	$(document).ready(function(){
	if(!checkMove()){ mainGame(); return;}
	document.getElementById("msg").innerHTML = "";
	var f = 0;
	var pace = .5;
	if(gameStatus[PACE] == STEADY)
		pace == 2;
	else if (gameStatus[PACE] == STRENUOUS)
		pace == 1;
	else if (gameStatus[PACE] == GRUELING)
		pace == .5;
	var id = setInterval(frame, 5);
    function frame() {
		if (f == 0 || f == 200* pace){
			$("#ok").attr("src", "image/Frame1.png");
		}
		else if (f == (50 * pace) || f == (250 * pace)){
			$("#ok").attr("src", "image/Frame2.png");
		}
		else if (f == (100 * pace)|| f == (300 * pace)){
			$("#ok").attr("src", "image/Frame1.png");
		}
		else if (f == (150 * pace)|| f == (350 * pace)){
			$("#ok").attr("src", "image/Frame4.png");
		}
        if (f == 400) {
			$("#ok").attr("src", "image/Frame1.png");
            clearInterval(id);
			travelTrail();
        } 
		else {
			f ++;
        }
    }
	});
}

function mainGame() {
	if(numCharacters == 0){lostGame(); return;}
	setDate();
	setHealth();
    var t = "<p id='msg'>"+randMsg+"</p>\
			<button class='button' id='checkOptions'><span>Check Options</span></button>\
			<p id='info' style='text-align: center;'>Date: " + months[month] + " " + day + ", " + year + "<br>\
			Weather: " + currWeather + "<br>\
			Health: " + currHealth + "<br>\
			Food: " + supplies[FOOD] + " pounds<br>\
			Next Landmark: " + (distance[0] - tempTraveled) + "<br>\
			Miles Traveled: " + totalTraveled + "</p>\
			" + spaceTxt + "\
			<div id='walking'><img src='image/mountain.JPG' id = 'col' alt='Mountain View' style='width:900px; height:350px; left:45%; margin-left: -350; position:absolute; background-color: black;'>\
			<img src='image/Frame1.png' id='ok' style = 'position:absolute; width: 180px; length: 180px; left: 50%; margin-left:-50px; margin-top:200px' alt='Mountain View'><div>";
    document.getElementsByClassName("container")[0].innerHTML = t;
    $(document).keypress(function (e) {
        if (e.keyCode == SPACEBAR) {
			$("#checkOptions").unbind();
            $(this).unbind();
            //travelTrail();
			walk();
        }
    });
    $("#checkOptions").click(function () {
        $(this).unbind();
        $(document).unbind();
        locationInfo();
    });
}

function lostGame(){
	//Store totalTraveled in the database with the player's name and his tombstone msg that comes from user input, the leaders name is at characters[0]
	document.getElementsByClassName("container")[0].innerHTML = "<h1>YOU LOSE FUCKER!!!</h1> <input type='text' val=''></input><br><button class='button'>Submit</button>";
}

function endGame() {
	var i;
	for(i = 0; i < supplies.length; i++) score += supplies[i];
    document.getElementsByClassName("container")[0].innerHTML = "<h1>YOU WIN FUCKER!!!</h1> <p>Your score: "+score+"</p> <input type='text' val=''></input><br><button class='button'>Submit</button>";
}