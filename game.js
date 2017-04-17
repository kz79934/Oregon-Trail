const SPACEBAR = 32;

//Indices for Supplies
const MONEY = 0;
const FOOD = 1;
const PARTS = 2;
const BAIT = 3;
const OXEN = 4;
const CLOTHING = 5;

//Indices for Status
const WEATHER = 0;
const HEALTH = 1;
const PACE = 2;
const RATIONS = 3;

var characters;
var supplies = [0,0,0,0,0,0];
var gameStatus;
var job;
var score;
var month;

welcome();

function welcome(){
	var t = "<div class='container'>\
				<h1>The Oregon Trail!</h1>\
				<div id='innerPage'>\
				<button onclick='getOccupation()'>Travel the Trail</button>\
				<button onclick ='getInfo()'>Learn About the Trail</button>\
				<button onclick=''>Top 10 Players</button>\
				<button onclick=''>Toggle Sound</button>\
				<button onclick='quit()'>Quit</button>\
				</div>\
			</div>";
	document.getElementById("main").innerHTML = t;
}

function getOccupation(){
	var t = "<form>\
				<input type='radio' name='occupation' value='Banker' onclick = 'displayOcc(this.value)' > Banker<br>\
				<input type='radio' name='occupation' value='Carpenter' onclick = 'displayOcc(this.value)'  > Carpenter<br>\
				<input type='radio' name='occupation' value='Farmer' onclick = 'displayOcc(this.value)' > Farmer<br>\
				<input type='radio' name='occupation' value='Outlaw' onclick = 'displayOcc(this.value)' > Outlaw<br>\
				<input type='radio' name='occupation' value='Cowboy' onclick = 'displayOcc(this.value)' > Cowboy<br>\
				<input type='radio' name='occupation' value='Merchant' onclick = 'displayOcc(this.value)' > Merchant<br>\
				<input type='radio' name='occupation' value='Batman' onclick = 'displayOcc(this.value)' > Batman<br>\
			</form>\
			<div id='info' ></div>\
				<br>\
				<input type='button' id='CharNames' value = 'Next' onclick = ''>";
	document.getElementById("innerPage").innerHTML = t;
}

function displayOcc(occupation){
	if(occupation == "Banker" ){
			document.getElementById("info").innerHTML = "Banker has the most starting money in the game but you get least amount of points playing him.";
			supplies[MONEY] = 1600;
	}
	else if(occupation == "Carpenter"){
			document.getElementById("info").innerHTML = "The Carpenter starts with an average amount of money, but get more points than the banker.";
			supplies[MONEY] = 800;
	}
	else if(occupation == "Farmer" ){
			document.getElementById("info").innerHTML = "You get little starting money, but 3 times as many points has the farmer.";
			supplies[MONEY] = 400;
	}
	else if(occupation == "Outlaw"){
			document.getElementById("info").innerHTML = "You start with basically no money, but you can rob people. Be sure not to get arrested as there are dire consequences.";
			supplies[MONEY] = 200;
	}
	else if(occupation == "Cowboy" ){
			document.getElementById("info").innerHTML = "The cowboy starts with a below average amount of money, but knows how to take care of it's cattle.";
			supplies[MONEY] = 600;
	}
	else if(occupation == "Merchant"){
			document.getElementById("info").innerHTML = "The Merchant starts with a below average amount of money, but gets better deals when trading.";
			supplies[MONEY] = 600;
	}
	else if(occupation == "Batman"){
			document.getElementById("info").innerHTML = "You're Batman!";
			supplies[MONEY] = 99999;
	}
	job = occupation;
	document.getElementById("CharNames").setAttribute("onclick", "getLeaderName()");
}


function getInfo(){	
	document.getElementById("innerPage").innerHTML = "<p>Page 1 info.</p><p>Press SPACEBAR to Continue</p>"
	var count = 0;
	document.body.onkeyup = function(k){
		if(k.keyCode == SPACEBAR)
			count++;
		
		switch(count){
			case 1:
				document.getElementById("innerPage").innerHTML = "<p>Page 2 info.</p><p>Press SPACEBAR to Continue</p>";
				break;
			case 2:
				document.getElementById("innerPage").innerHTML = "<p>Page 3 info.</p><p>Press SPACEBAR to Continue</p>";
				break;
			case 3:
				document.getElementById("innerPage").innerHTML = "<p>Page 4 info.</p><p>Press SPACEBAR to Continue</p>";
				break;
			default:
				if(count == 4)
					welcome();
				break;
		}
		
	}
	
}

//A function to sub in for getInfo just incase
function getInfo2(num = 0){
	var gameInfo = ["Page 1 info", "Page 2 info", "Page 3 info", "Page 4 info"];
	if(num < 3)
		document.getElementById("innerPage").innerHTML = "<p>" + gameInfo[num] +"</p> <button onclick='getInfo2("+(num+1)+")'>Next</button>";
	else
		document.getElementById("innerPage").innerHTML = "<p>" + gameInfo[num] +"</p> <button onclick='welcome()'>Next</button>";
}

function quit(){
	document.getElementById("main").innerHTML = "<h1>THANKS FOR PLAYING FUCKER!!!</h1>";
}

function getLeaderName(){
	characters = ["Andrew", "Kathy", "LeBron", "Barbara", "Frank"];
	var t = "<p>What is the first name of your leader?</p>\
			<input id='leader' type='text' value=''></input><button onclick='getNames()'>Next</button>"
	document.getElementById("innerPage").innerHTML = t;
			
}
function getNames(){
	var leaderName = document.getElementById("leader").value;
	if(leaderName.replace(/\s/g, "") != "")
		characters[0] = leaderName;
	var t = "<p>What are the first names of the other members in your party?<br>\
			The leader's name is " + characters[0] + ".</p>\
			<input class='names' type='text' value=''></input><br>\
			<input class='names' type='text' value=''></input><br>\
			<input class='names' type='text' value=''></input><br>\
			<input class='names' type='text' value=''></input><br><br>\
			<button onclick='getLeaderName()'>Back</button>\
			<button onclick='finalizeNames()'>Next</button>";
	document.getElementById("innerPage").innerHTML = t;
}

function finalizeNames(){
	var tempNames = document.getElementsByClassName("names");
	var i
	for(i = 1; i < 5; i++){
		if((tempNames[i-1].value).replace(/\s/g, "") != "")
			characters[i] = tempNames[i-1].value;
	}
	var t = "<p>The name of your leader is " + characters[0] + ".<br>\
			The names of your party members are " + characters[1] + ", " + characters[2] + ", " + characters[3] + ", and " + characters[4] + ".</p>\
			<button onclick='pickMonth()'>Next</button> <button onclick='getLeaderName()'>Change Names</button>";
	document.getElementById("innerPage").innerHTML = t;
}

function pickMonth(){
	var t = "<p>It is 1848. Your jump off place for Oregon is Independence, Missouri. You must decide which month to leave Independence.</p>\
			<form>\
			<input name='months' type='radio' value='March' onclick='assignMonth(this.value)'>March</input><br>\
			<input name='months' type='radio' value='April' onclick='assignMonth(this.value)'>April</input><br>\
			<input name='months' type='radio' value='May' onclick='assignMonth(this.value)'>May</input><br>\
			<input name='months' type='radio' value='June' onclick='assignMonth(this.value)'>June</input><br>\
			<input name='months' type='radio' value='July' onclick='assignMonth(this.value)'>July</input><br>\
			</form><br>\
			<button onclick='getAdvice()'>Ask for Advice</button> <button id='play' onclick=''>Play Game</button>"
	document.getElementById("innerPage").innerHTML = t;
}

function assignMonth(userMonth){
	month = userMonth;
	document.getElementById("play").setAttribute("onclick", "finishIntro()");
}

function getAdvice(){
	document.getElementById("innerPage").innerHTML = "<p>Offer Advice Here</p> <button onclick='pickMonth()'>Back</button>"
}

//Initialize all global variables and arrays before starting game
function finishIntro(){
	console.log(month);
}