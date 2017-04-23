const SPACEBAR = 32;
//Indices for Supplies
const MONEY = 0;
const FOOD = 1;
const PARTS = 2;
	const WHEEL = 0;
	const AXEL = 1;
	const TONGUE = 2;
const BAIT = 3;
const OXEN = 4;
const CLOTHING = 5;

//Indices for Status
const WEATHER = 0;
	//Weather Options
	const COOL = 0;
	const RAINY = 1;

const HEALTH = 1;
	//Health Options
	const GOOD = 0;
	const OKAY = 1;
	const BAD = 2;
	
const PACE = 2;
	//Pace Options
	const STEADY = 0;
	const STRENUOUS = 1;
	const GRUELING = 2;

const RATIONS = 3;
	//Rations Options
	const FILLING = 0;
	const MEAGER = 1;
	const BAREBONES = 2;

var spaceTxt = "<div>Press SPACE BAR to Continue</div>";

//Distance is relative to the previous location (Ex: b is a 100 miles from a)
var locations = ["a", "b", "c", "d", "e"];
var distance = [50, 100, 150, 200, 250];

var rivers = [];

var months = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var price = [.2, 10, 20, .1, 10]
	//Indicies for price
	const FOOD_COST = 0;
	const CLOTHING_COST = 1;
	const OXEN_COST = 2;
	const BAIT_COST = 3;
	const WAGON_COST = 4;

var characters;
var supplies = [0,0,0,0,0,0];
//Holder for supplies you want to buy
var tempSupplies = [0,0,0,0,0,0];
var parts = [0,0,0];
//Holder for parts you want to buy
var tempParts = [0,0,0];
var gameStatus = [0, 0, 0, 0];
var job;
var score = 0;
var month;
var day = 1;
var year = 1848;
var totalTraveled = 0;
var tempTraveled = 0;
var currWeather = "Cool";
var currHealth = "Good";
var currLocation = "Independence";
var gameDone = 0;

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
			supplies[MONEY] = 1600.00;
	}
	else if(occupation == "Carpenter"){
			document.getElementById("info").innerHTML = "The Carpenter starts with an average amount of money, but get more points than the banker.";
			supplies[MONEY] = 800.00;
	}
	else if(occupation == "Farmer" ){
			document.getElementById("info").innerHTML = "You get little starting money, but 3 times as many points has the farmer.";
			supplies[MONEY] = 400.00;
	}
	else if(occupation == "Outlaw"){
			document.getElementById("info").innerHTML = "You start with basically no money, but you can rob people. Be sure not to get arrested as there are dire consequences.";
			supplies[MONEY] = 200.00;
	}
	else if(occupation == "Cowboy" ){
			document.getElementById("info").innerHTML = "The cowboy starts with a below average amount of money, but knows how to take care of it's cattle.";
			supplies[MONEY] = 600.00;
	}
	else if(occupation == "Merchant"){
			document.getElementById("info").innerHTML = "The Merchant starts with a below average amount of money, but gets better deals when trading.";
			supplies[MONEY] = 600.00;
	}
	else if(occupation == "Batman"){
			document.getElementById("info").innerHTML = "You're Batman!";
			supplies[MONEY] = 99999.00;
	}
	job = occupation;
	document.getElementById("CharNames").setAttribute("onclick", "getLeaderName()");
}

function getInfo(num = 0){
	var gameInfo = ["Page 1 info", "Page 2 info", "Page 3 info", "Page 4 info"];
	var count = 1;
	//Commented section uses a button instead
	/*
	document.getElementById("innerPage").innerHTML = "<p>"+ gameInfo[0] +"</p> <button id='info'>Next</button>"
	$(document).ready(function(){
		$("#info").click(function(){
			if(count < 4){
				$("p").text(gameInfo[count]);
				count++;
			}
			else{
				$(this).unbind();
				welcome();
			}
		});
	});
	*/
	document.getElementById("innerPage").innerHTML = "<p>"+ gameInfo[0] +"</p>" + spaceTxt;
	
	$(document).keypress(function(e){
		if(e.keyCode == SPACEBAR){
			if(count < 4){
				$("p").text(gameInfo[count]);
				count++;
			}
			else{
				$(this).unbind();
				welcome();
			}
		}
	});
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
	month = months.indexOf(userMonth);
	document.getElementById("play").setAttribute("onclick", "finishIntro()");
}

function getAdvice(){
	//document.getElementById("innerPage").innerHTML = "<p>Offer Advice Here</p> <button onclick='pickMonth()'>Back</button>"
	document.getElementById("innerPage").innerHTML = "<p>Offer Advice Here</p>" + spaceTxt;
	
	$(document).keypress(function(e){
		if(e.keyCode == SPACEBAR){
			$(this).unbind();
			pickMonth();
		}
	});
	
}

function finishIntro(){
	console.log(month);

	var info = ["Before leaving Independence you should buy equipment and supplies. You have $"+ supplies[MONEY] +" in cash, but you don't have to spend it all now"
				, "You can buy whatever you need at Krunal's General Store."];
	//var t = "<p>"+ info[0] +"</p> <button id='toStore' onclick=''>Next</button>";
	var t = "<p>"+ info[0] +"</p>" + spaceTxt;
	document.getElementsByClassName("container")[0].innerHTML = t;
	
	/*
	$(document).ready(function(){
		$("#toStore").click(function(){
			$("p").text(info[1]);
			document.getElementById("toStore").setAttribute("onclick", "initStore()");
			$(this).unbind();
		});
	});
	*/
	
	var count = 0;
	$(document).keypress(function(e){
		if(e.keyCode == SPACEBAR){
			if(!count){
				$("p").text(info[1]);
				count++;
			}
			else{
				$(this).unbind();
				storeGreeting();
			}
		}
	});
	
}

function storeGreeting(){
	console.log("test");
	var t = "<p>Hi, I'm Krunal! I see you're going to Oregon, and it just so happens that I have some very useful supplies you may need.</p>\
			<div>- A team of oxen to pull your wagon<br>- Clothing for both summer and winter<br>- Plenty of food for your trip<br>- Bait so you can fish<br>- Spare parts for your wagon</div><br>" + spaceTxt;
	
	document.getElementsByClassName("container")[0].innerHTML = t;
	
	$(document).keypress(function(e){
		if(e.keyCode == SPACEBAR){
			$(this).unbind();
			initStore();
		}
	});
}

function initStore(){
	var tempBalance = supplies[MONEY] - ((price[OXEN_COST]*tempSupplies[OXEN]) + (price[CLOTHING_COST]*tempSupplies[CLOTHING]) + 
	(price[FOOD_COST]*tempSupplies[FOOD]) + (price[BAIT_COST]*tempSupplies[BAIT]) + (price[WAGON_COST]*tempSupplies[PARTS]));
	var t = "<h2>Krunal's General Store</h2><h4>Independence, Missouri</h4><h4>"+ months[month] +" 1, 1848</h4>\
			<button value='Oxen' onclick='initBuy(this.value)'>Oxen</button> &nbsp $"+(price[OXEN_COST]*tempSupplies[OXEN])+"<br>\
			<button value='Clothes' onclick='initBuy(this.value)'>Clothes</button> &nbsp $"+(price[CLOTHING_COST]*tempSupplies[CLOTHING])+"<br>\
			<button value='Food' onclick='initBuy(this.value)'>Food</button> &nbsp $"+(price[FOOD_COST]*tempSupplies[FOOD])+"<br>\
			<button value='Bait' onclick='initBuy(this.value)'>Bait</button> &nbsp $"+(price[BAIT_COST]*tempSupplies[BAIT])+"<br>\
			<button value='Wagon' onclick='initBuy(this.value)'>Spare Parts</button> &nbsp $"+(price[WAGON_COST]*tempSupplies[PARTS])+"<br><br>\
			<div>Balance After Purchase: $"+tempBalance+"</div><br>\
			<button id='startTrail' onclick=''>Start the Trail</button>";
	document.getElementsByClassName("container")[0].innerHTML = t;
	if(tempSupplies[OXEN] > 0)
		document.getElementById("startTrail").setAttribute("onclick", "initOpening()");
}

function initBuy(item){
	var t;
	if(item == "Oxen"){
		t = "<p>Advice on Oxen. How many yoke would you like to buy?</p>\
			<input value=''></input><button onclick='checkValid(OXEN)'>Buy It!</button><div id='errMsg'></div>";
	}
	else if(item == "Clothes"){
		t = "<p>Advice on Clothes. How many pairs of clothes would you like to buy?</p>\
			<input value=''></input><button onclick='checkValid(CLOTHING)'>Buy It!</button><div id='errMsg'></div>";
	}
	else if(item == "Food"){
		t = "<p>Advice on Food. How much food in pounds would you like to buy?</p>\
			<input value=''></input><button onclick='checkValid(FOOD)'>Buy It!</button><div id='errMsg'></div>";
	}
	else if(item == "Bait"){
		t = "<p>Advice on Bait. How many buckets of bait would you like to buy?</p>\
			<input value=''></input><button onclick='checkValid(BAIT)'>Buy It!</button><div id='errMsg'></div>";
	}
	else if(item == "Wagon"){
		t = "<p>Advice on Wagon.<br><br>\
		How many wheels would you like to buy? <input id='wheel' value=''></input><br>\
		How many axels would you like to buy? <input id='axel' value=''></input><br>\
		How many tongues would you like to buy? <input id='tongue' value=''></input><br></p>\
		<button onclick='checkValid(PARTS)'>Buy It!</button><div id='errMsg'></div>";
	}
	document.getElementsByClassName("container")[0].innerHTML = t;
}

function checkValid(index){
	var tempBalance, tempValue;
	var tempInputs = document.getElementsByTagName("input");
	var patt = /\d+/;
	if(index == PARTS){
		var total = 0;
		var i;
		for(i = 0; i < tempInputs.length; i++){
			if(!(patt.test(tempInputs[i].value))){
				document.getElementById("errMsg").innerHTML = "Please enter a number for each part!";
				return;
			}
			total += parseInt(tempInputs[i].value);
		}
		console.log(total);
		tempValue = tempSupplies[index];
		tempSupplies[index] = total;
		tempBalance = supplies[MONEY] - ((price[OXEN_COST]*tempSupplies[OXEN]) + (price[CLOTHING_COST]*tempSupplies[CLOTHING]) + 
		(price[FOOD_COST]*tempSupplies[FOOD]) + (price[BAIT_COST]*tempSupplies[BAIT]) + (price[WAGON_COST]*tempSupplies[PARTS]));
		if(tempBalance < 0){
			tempSupplies[index] = tempValue;
			document.getElementById("errMsg").innerHTML = "You do not have enough money to do that!";
		}
		else{
			tempParts[WHEEL] = parseInt(tempInputs[0].value);
			tempParts[AXEL] = parseInt(tempInputs[1].value);
			tempParts[TONGUE] = parseInt(tempInputs[2].value);
			backToStore();
		}
	}
	else{
		if(patt.test(tempInputs[0].value)){
				tempValue = tempSupplies[index];
				if(index == OXEN)
					tempSupplies[index] = parseInt(tempInputs[0].value) * 2;
				else if(index == BAIT)
					tempSupplies[index] = parseInt(tempInputs[0].value) * 20;
				else
					tempSupplies[index] = parseInt(tempInputs[0].value);
				tempBalance = supplies[MONEY] - ((price[OXEN_COST]*tempSupplies[OXEN]) + (price[CLOTHING_COST]*tempSupplies[CLOTHING]) + 
				(price[FOOD_COST]*tempSupplies[FOOD]) + (price[BAIT_COST]*tempSupplies[BAIT]) + (price[WAGON_COST]*tempSupplies[PARTS]));
				if(tempBalance < 0){
					tempSupplies[index] = tempValue;
					document.getElementById("errMsg").innerHTML = "You do not have enough money to do that!";
				}
				else
					backToStore();
		}
		else
			document.getElementById("errMsg").innerHTML = "Please enter a number!";
	}
}

function backToStore(){
	//Add if statements to figure out if going back to initStore or other general store.
	initStore();
}

function tempTransfer(){
	var i;
	for(i = 0; i < supplies.length; i++)
		supplies[i] += tempSupplies[i];
	for(i = 0; i < parts.length; i++)
		parts[i] += tempParts;
	tempSupplies = [0,0,0,0,0,0];
	tempParts = [0,0,0];
}

function initOpening(){
	tempTransfer();
	var IndepDay = months[month];
	var t = "<div id='op' style= 'background-color: black;'>\
			<img src='opening.JPG' alt='Mountain View' style='width:98%; height:97%;position: absolute;background-color: black;'>\
			<div id='opScene' style= 'position: absolute ;\
									left: 30%;\
									top: 77%;\
									width: 30%;\
									height: 20%;\
									text-align: center;\
									font-size: 30px;\
									background-color:#FFFDDD;\
									color:black;\
									border:4px double #e6e600;'>\
									Independence: "+IndepDay+" 1, 1848 <br> Click Space to begin you journey</div>\
			</div> ";
	
	document.getElementsByClassName("container")[0].innerHTML = t;
	
	$(document).keypress(function(e){
		if(e.keyCode == SPACEBAR){
			$(this).unbind();
			locationInfo();
		}
	});
}

function locationInfo(){
	//Do this later
	mainGame();
}

function stopLocation(){
	var t = "<p>Do you want to stop at " +currLocation+"?</p>\
			<button>Yes</button>&nbsp<button onclick='mainGame()'>No</button>";
	document.getElementsByClassName("container")[0].innerHTML = t;
}

function travelTrail(){
	if(gameStatus[PACE] == STEADY){
		totalTraveled += 6;
		tempTraveled += 6;
	}
	else if(gameStatus[PACE] == STRENUOUS){
		totalTraveled += 12;
		tempTraveled += 12;
	}
	else if(gameStatus[PACE] == GRUELING){
		totalTraveled += 18;
		tempTraveled += 18;
	}
	//Check if they won
	if(tempTraveled >= distance[distance.length - 1]){
		gameDone = 1;
		endGame();
	}

	else if(tempTraveled >= distance[0]){
		//Ask if they wish to stop here
		totalTraveled = totalTraveled - (tempTraveled - distance[0]);
		tempTraveled = 0;
		currLocation = locations[0];
		distance.shift();
		locations.shift();
		stopLocation();
		console.log(distance.length);
	}
	
	else if(!gameDone)
		mainGame();
}

function mainGame(){
	//Adjusting the date
	if(day > monthDays[month]){
		day = 1;
		if(month == 11){
			month = 0;
			year++;
		}
		else
			month++;
	}
	//Adjusting the Weather text
	if(gameStatus[WEATHER] == COOL)
		currWeather = "Cool";
	else if(gameStatus[WEATHER] == RAINY)
		currWeather = "Rainy";
	//Adjusting the Health text
	if(gameStatus[HEALTH] == GOOD)
		currHealth = "Good";
	else if(gameStatus[HEALTH] == OKAY)
		currHealth = "Okay";
	else if(gameStatus[HEALTH] == BAD)
		currHealth = "Bad";
	
	var t = "<div id='msg'></div>\
			<button onclick=''>Check Options</button>\
			<p id='info'>Date: "+months[month]+" "+day+", "+year+"<br>\
			Weather: "+currWeather+"<br>\
			Health: "+currHealth+"<br>\
			Food: "+supplies[FOOD]+" pounds<br>\
			Next Landmark: "+(distance[0]-tempTraveled)+"<br>\
			Miles Traveled: "+totalTraveled+"</p>\
			" + spaceTxt;
			
	document.getElementsByClassName("container")[0].innerHTML = t;
	
	$(document).keypress(function(e){
		if(e.keyCode == SPACEBAR){
			$(this).unbind();
			travelTrail();
		}
	});
	
}

function endGame(){
	document.getElementsByClassName("container")[0].innerHTML = "<h1>YOU WIN FUCKER!!!</h1>";
}