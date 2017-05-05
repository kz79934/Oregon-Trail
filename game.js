const SPACEBAR = 32;
//Indices for Supplies
const MONEY = 0;
const FOOD = 1;
const PARTS = 2;
const WHEEL = 0;
const AXLE = 1;
const TONGUE = 2;
const BAIT = 3;
const OXEN = 4;
const CLOTHING = 5;
//Indices for Status
const WEATHER = 0;
//Weather Options
const COOL = 0;
const RAINY = 1;
const COLD = 2;
const WARM = 3;
const HOT = 4;
const VERYRAINY = 5;
const HEALTH = 1;
//Health Options
const GOOD = 0;
const FAIR = 1;
const POOR = 2;
const VERYPOOR = 3;
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
var spaceTxt = "<div><p>Press SPACE BAR to Continue</p></div>";
var locations = ["Kansas River crossing", "Big Blue River crossing", "Fort Kearny", "Chimney Rock", "Fort Laramie", "Independence Rock", "South Pass"];
var distance = [102, 82, 118, 250, 86, 190, 102];
//var route1 = ["Green River crossing", "Soda Springs", "Fort Hall", "Snake River crossing", "Fort Boise", "Blue Mountains"];
//var altroute1 = ["Fort Bridger", "Soda Springs"];
//var distance1 = [57, 143, 57, 182, 113, 160];
//var altdistance1 = [125, 162];
//var locType1 = [RIVER, 0, TOWN, RIVER, TOWN, DIVIDE];
//var altlocType1 = [TOWN, 0];
//var route2 = ["Fort Walla Walla", "The Dalles", "Willamette Valley"];
//var altroute2 = ["The Dalles"]; (distance = 125)
//var distance2 = [55, 120, 100];
//var locType2 = [TOWN, DIVIDE, END];
//Last decision is Barlow Toll Road (cost $8.50) or Columbia River (Finishes Game)
const TOWN = 1;
const RIVER = 2;
const DIVIDE1 = 3;
const DIVIDE2 = 4
const END = 5;
var locType = [RIVER, RIVER, TOWN, 0, TOWN, 0, DIVIDE1];
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
var numCharacters = 5;
var hp = [100, 100, 100, 100, 100];
var supplies = [0, 0, 0, 0, 0, 0];
//Holder for supplies you want to buy
var tempSupplies = [0, 0, 0, 0, 0, 0];
var parts = [0, 0, 0];
//Holder for parts you want to buy
var tempParts = [0, 0, 0];
var gameStatus = [0, 0, 0, 0];
var job;
var score = 0;
var month = 2;
var day = 1;
var year = 1848;
var totalTraveled = 0;
var tempTraveled = 0;
var currWeather = "Cool";
var currHealth = "Good";
var currPace = "Steady";
var currRations = "Filling";
var currLocation = "Independence";
var currType = TOWN;
var randMsg = "";
var ferryWait = 0;
var brokenPart = 3;
var soundOn = 1;
var gameDone = 0;
welcome();

function welcome() {
    var t = "<div class='container'>\
				<h1>The Oregon Trail!</h1>\
				<div id='innerPage'>\
				<button class='button button2' onclick='getOccupation()'><span>Travel the Trail</span></button><br>\
				<button class='button button2' onclick ='getInfo()'><span>Learn About the Trail</span></button><br>\
				<button class='button button2' onclick=''><span>Top 10 Players</span></button><br>\
				<button id='sound' class='button button2' onclick='toggleSound()'><span>Turn Off Sound</span></button><br>\
				<button class='button button2' onclick='quit()'><span>Quit</span></button><br>\
				</div>\
			</div>";
    document.getElementById("main").innerHTML = t;
}

function toggleSound(){
	if(soundOn) {soundOn = 0; document.getElementById("sound").innerHTML = "Turn On Sound"}
	else {soundOn = 1; document.getElementById("sound").innerHTML = "Turn Off Sound"}
}

function getOccupation() {
    var t = "<form><div class='container'><ul>\
				<li><input type='radio' id='f-option' name='occupation' value='Banker' onclick = 'displayOcc(this.value)'> <label for='f-option'>Banker</label> <div class='check'></div></li> <div id='info1' ></div>\
				<li><input type='radio' id='s-option' name='occupation' value='Carpenter' onclick = 'displayOcc(this.value)'> <label for='s-option'>Carpenter</label> <div class='check'><div class='inside'></div></div></li> <div id='info2' ></div>\
				<li><input type='radio' id='t-option' name='occupation' value='Farmer' onclick = 'displayOcc(this.value)' > <label for='t-option'>Farmer</label> <div class='check'><div class='inside'></div></div> </li> <div id='info3' ></div>\
				<li><input type='radio' id='u-option' name='occupation' value='Fisher' onclick = 'displayOcc(this.value)' > <label for='u-option'>Fisher</label> <div class='check'><div class='inside'></div></div> </li> <div id='info4' ></div>\
				<li><input type='radio' id='v-option' name='occupation' value='Cowboy' onclick = 'displayOcc(this.value)' > <label for='v-option'>Cowboy</label> <div class='check'><div class='inside'></div></div> </li> <div id='info5' ></div>\
				<li><input type='radio' id='w-option' name='occupation' value='Merchant' onclick = 'displayOcc(this.value)' > <label for='w-option'>Merchant</label> <div class='check'><div class='inside'></div></div> </li> <div id='info6' ></div>\
				<li><input type='radio' id='x-option' name='occupation' value='Batman' onclick = 'displayOcc(this.value)' > <label for='x-option'>Batman</label> <div class='check'><div class='inside'></div></div> </li> <div id='info7' ></div>\
			</ul></div></form>\
				<button class='button button1' id='CharNames' onclick = ''><span>Next</span></button>";
    document.getElementById("innerPage").innerHTML = t;
}

function displayOcc(occupation) {
    if (occupation == "Banker") {
        document.getElementById("info1").innerHTML = "<p>Banker has the most starting money in the game but you get least amount of points playing him.</p>";
        supplies[MONEY] = 1600.00;
		
		document.getElementById("info2").innerHTML ="";
		document.getElementById("info3").innerHTML ="";
		document.getElementById("info4").innerHTML ="";
		document.getElementById("info5").innerHTML ="";
		document.getElementById("info6").innerHTML ="";
		document.getElementById("info7").innerHTML ="";
    }
    else if (occupation == "Carpenter") {
        document.getElementById("info2").innerHTML = "<p>The Carpenter starts with an average amount of money, but get more points than the banker.</p>";
        supplies[MONEY] = 800.00;
		
		document.getElementById("info1").innerHTML ="";
		document.getElementById("info3").innerHTML ="";
		document.getElementById("info4").innerHTML ="";
		document.getElementById("info5").innerHTML ="";
		document.getElementById("info6").innerHTML ="";
		document.getElementById("info7").innerHTML ="";
    }
    else if (occupation == "Farmer") {
        document.getElementById("info3").innerHTML = "<p>You get little starting money, but 3 times as many points has the farmer.</p>";
        supplies[MONEY] = 400.00;
		
		document.getElementById("info1").innerHTML ="";
		document.getElementById("info2").innerHTML ="";
		document.getElementById("info4").innerHTML ="";
		document.getElementById("info5").innerHTML ="";
		document.getElementById("info6").innerHTML ="";
		document.getElementById("info7").innerHTML ="";
    }
    else if (occupation == "Fisher") {
        document.getElementById("info4").innerHTML = "<p>You start with an average amount of money but have a better chance at catching fish.</p>";
        supplies[MONEY] = 600.00;
		
		document.getElementById("info1").innerHTML ="";
		document.getElementById("info2").innerHTML ="";
		document.getElementById("info3").innerHTML ="";
		document.getElementById("info5").innerHTML ="";
		document.getElementById("info6").innerHTML ="";
		document.getElementById("info7").innerHTML ="";
    }
    else if (occupation == "Cowboy") {
        document.getElementById("info5").innerHTML = "<p>The cowboy starts with a below average amount of money, but knows how to take care of it's cattle.</p>";
        supplies[MONEY] = 600.00;
		
		document.getElementById("info1").innerHTML ="";
		document.getElementById("info2").innerHTML ="";
		document.getElementById("info3").innerHTML ="";
		document.getElementById("info4").innerHTML ="";
		document.getElementById("info6").innerHTML ="";
		document.getElementById("info7").innerHTML ="";
    }
    else if (occupation == "Merchant") {
        document.getElementById("info6").innerHTML = "<p>The Merchant starts with a below average amount of money, but gets better deals when trading.</p>";
        supplies[MONEY] = 600.00;
		
		document.getElementById("info1").innerHTML ="";
		document.getElementById("info2").innerHTML ="";
		document.getElementById("info3").innerHTML ="";
		document.getElementById("info4").innerHTML ="";
		document.getElementById("info5").innerHTML ="";
		document.getElementById("info7").innerHTML ="";
    }
    else if (occupation == "Batman") {
        document.getElementById("info7").innerHTML = "<p>You're Batman!</p>";
        supplies[MONEY] = 99999.00;
		
		document.getElementById("info1").innerHTML ="";
		document.getElementById("info2").innerHTML ="";
		document.getElementById("info3").innerHTML ="";
		document.getElementById("info4").innerHTML ="";
		document.getElementById("info5").innerHTML ="";
		document.getElementById("info6").innerHTML ="";
    }
    job = occupation;
    document.getElementById("CharNames").setAttribute("onclick", "getLeaderName()");
}

function getInfo(num = 0) {
    var gameInfo = ["Page 1 info", "Page 2 info", "Page 3 info", "Page 4 info"];
    var count = 1;
    document.getElementById("innerPage").innerHTML = "<p id='info'>" + gameInfo[0] + "</p>" + spaceTxt;
    $(document).keypress(function (e) {
        if (e.keyCode == SPACEBAR) {
            if (count < 4) {
                $("#info").text(gameInfo[count]);
                count++;
            }
            else {
                $(this).unbind();
                welcome();
            }
        }
    });
}

function quit() {
    document.getElementById("main").innerHTML = "<h1>THANKS FOR PLAYING FUCKER!!!</h1>";
}

//validate input for alpha for leader
function alphaValLeader(input){
	var key;
	document.getElementById ? key = input.keyCode: key = input.which;
	if(event.keyCode == 13){
		getNames();
	}
	return ((key > 64 && key < 91) || (key > 96 && key < 123) || key == 8 || key == 39 || key == 16 || key == 13);
}

//validate input for alpha for members
function alphaValMembers(input){
	var key;
	document.getElementById ? key = input.keyCode: key = input.which;
	if(event.keyCode == 13){
		finalizeNames();
	}
	return ((key > 64 && key < 91) || (key > 96 && key < 123) || key == 8 || key == 39 || key == 16 || key == 13);
}

function getLeaderName() {
    characters = ["Andrew", "Kathy", "LeBron", "Barbara", "Frank"];
    var t = "<p>What is the first name of your leader?</p>\
			<input id='leader' type='text' value='' placeholder='First Name' onkeypress='return alphaValLeader(event)'></input><br><button class='button' onclick='getNames()'><span>Next</span></button>"
    document.getElementById("innerPage").innerHTML = t;
}

function getNames() {
    var leaderName = document.getElementById("leader").value;
	var firstLetter = leaderName.charAt(0).toUpperCase();
	var nameSlice = leaderName.slice(1).toLowerCase();
	leaderName = firstLetter + nameSlice;
	
    if (leaderName.replace(/\s/g, "") != "") characters[0] = leaderName;
    var t = "<p>What are the first names of the other members in your party?<br>\
			The leader's name is " + characters[0] + ".</p>\
			<input class='names' type='text' value='' placeholder='First Member' onkeypress='return alphaValMembers(event)'></input><br>\
			<input class='names' type='text' value='' placeholder='Second Member' onkeypress='return alphaValMembers(event)'></input><br>\
			<input class='names' type='text' value='' placeholder='Third Member' onkeypress='return alphaValMembers(event)'></input><br>\
			<input class='names' type='text' value='' placeholder='Fourth Member' onkeypress='return alphaValMembers(event)'></input><br><br>\
			<button class='button' onclick='getLeaderName()'><span>Back</span></button><br>\
			<button class='button' onclick='finalizeNames()'><span>Next</span></button>";
    document.getElementById("innerPage").innerHTML = t;
}

function finalizeNames() {
    var tempNames = document.getElementsByClassName("names");
    var i
    for (i = 1; i < 5; i++) {
        if ((tempNames[i - 1].value).replace(/\s/g, "") != "") {
			var tname = tempNames[i - 1].value;
			var tfirstLetter = tname.charAt(0).toUpperCase();
			var tnameSlice = tname.slice(1).toLowerCase();
			characters[i] = tfirstLetter + tnameSlice;
		}	
    }	
    var t = "<p>The name of your leader is " + characters[0] + ".<br>\
			The names of your party members are " + characters[1] + ", " + characters[2] + ", " + characters[3] + ", and " + characters[4] + ".</p>\
			<button class='button' onclick='pickMonth()'><span>Next</span></button><br> <button class='button' onclick='getLeaderName()'><span>Change Names</span></button>";
    document.getElementById("innerPage").innerHTML = t;
}

function pickMonth() {
    var t = "<p>It is 1848. Your jump off place for Oregon is Independence, Missouri. You must decide which month to leave Independence.</p>\
			<form><div class='container'><ul>\
			<li><input name='months' id='f-option' type='radio' value='March' onclick='assignMonth(this.value)' checked><label for='f-option'>March</label> <div class='check'></div></li></input><br>\
			<li><input name='months' id='s-option' type='radio' value='April' onclick='assignMonth(this.value)'><label for='s-option'>April</label><div class='check'><div class='inside'></div></div></li> </input><br>\
			<li><input name='months' id='t-option' type='radio' value='May' onclick='assignMonth(this.value)'><label for='t-option'>May</label><div class='check'><div class='inside'></div></div></li> </input><br>\
			<li><input name='months' id='u-option' type='radio' value='June' onclick='assignMonth(this.value)'><label for='u-option'>June</label><div class='check'><div class='inside'></div></div></li> </input><br>\
			<li><input name='months' id='v-option' type='radio' value='July' onclick='assignMonth(this.value)'><label for='v-option'>July</label><div class='check'><div class='inside'></div></div></li> </input><br>\
			</ul></div></form>\
			<button class='button button1' onclick='getAdvice()'><span>Ask for Advice</span></button> <button class='button button1' id='play' onclick='finishIntro()'>\<span>Play Game</span></button>"
    document.getElementById("innerPage").innerHTML = t;
}

function assignMonth(userMonth) {
    month = months.indexOf(userMonth);
    document.getElementById("play").setAttribute("onclick", "finishIntro()");
}

function getAdvice() {
    document.getElementById("innerPage").innerHTML = "<p>Offer Advice Here</p>" + spaceTxt;
    $(document).keypress(function (e) {
        if (e.keyCode == SPACEBAR) {
            $(this).unbind();
            pickMonth();
        }
    });
}

function finishIntro() {
    console.log(month);
    var info = ["Before leaving Independence you should buy equipment and supplies. You have $" + supplies[MONEY] + " in cash, but you don't have to spend it all now"
				, "You can buy whatever you need at Krunal's General Store."];
    var t = "<p id='info'>" + info[0] + "</p>" + spaceTxt;
    document.getElementsByClassName("container")[0].innerHTML = t;
 
    var count = 0;
    $(document).keypress(function (e) {
        if (e.keyCode == SPACEBAR) {
            if (!count) {
                $("#info").text(info[1]);
                count++;
            }
            else {
                $(this).unbind();
                storeGreeting();
            }
        }
    });
}

function storeGreeting() {
    console.log("test");
    var t = "<p>Hi, I'm Krunal! I see you're going to Oregon, and it just so happens that I have some very useful supplies you may need </p>\
			<ol class='a'>\
                <li1>1. A team of oxen to pull your wagon</li1><br>\
                <li1>2. Clothing for both summer and winter</li1><br>\
                <li1>3. Plenty of food for your trip</li1><br>\
                <li1>4. Bait so you can fish</li1><br>\
                <li1>5. Spare parts for your wagon</li1></ol><br>" + spaceTxt;
    document.getElementsByClassName("container")[0].innerHTML = t;
    $(document).keypress(function (e) {
        if (e.keyCode == SPACEBAR) {
            $(this).unbind();
            initStore();
        }
    });
}

function initStore() {
    var tempBalance = supplies[MONEY] - ((price[OXEN_COST] * tempSupplies[OXEN]) + (price[CLOTHING_COST] * tempSupplies[CLOTHING]) + (price[FOOD_COST] * tempSupplies[FOOD]) + (price[BAIT_COST] * tempSupplies[BAIT]) + (price[WAGON_COST] * tempSupplies[PARTS]));
    var t = "<h2>Krunal's General Store</h2><h4>Independence, Missouri</h4><h4>" + months[month] + " 1, 1848</h4>\
			<ol class='b'><li1>1. Oxen = $" + (price[OXEN_COST] * tempSupplies[OXEN]) + "&nbsp&nbsp&nbsp <button class='button button1' value='Oxen' onclick='initBuy(this.value)'><span>Buy!</span></button> </li1><br>\
            <li1>2. Clothes = $" + (price[CLOTHING_COST] * tempSupplies[CLOTHING]) + " <button class='button button1' value='Clothes' onclick='initBuy(this.value)'><span>Buy!</span></button> </li1><br>\
            <li1>3. Food = $" + Number(Math.round((price[FOOD_COST] * tempSupplies[FOOD]) + 'e2') + 'e-2') + "&nbsp&nbsp&nbsp <button class='button button1' value='Food' onclick='initBuy(this.value)'><span>Buy!</span></button> </li1><br>\
            <li1>4. Bait = $" + (price[BAIT_COST] * tempSupplies[BAIT]) + "&nbsp&nbsp&nbsp <button class='button button1' value='Bait' onclick='initBuy(this.value)'><span>Buy!</span></button> </li1><br>\
            <li1>5. Parts = $" + (price[WAGON_COST] * tempSupplies[PARTS]) + "&nbsp&nbsp <button class='button button1' value='Wagon' onclick='initBuy(this.value)'><span>Buy!</span></button> </li1></ol><br>\
			<div><p>Balance After Purchase: $" + tempBalance + "</p></div><br>\
			<button class='button' id='startTrail' onclick='OxenValidation()'><span>Start the Trail</span></button>";
    document.getElementsByClassName("container")[0].innerHTML = t;
   //if (tempSupplies[OXEN] > 0) document.getElementById("startTrail").setAttribute("onclick", "initOpening()");
}

function OxenValidation(){

    	if (tempSupplies[OXEN] > 0){
			initOpening();
			//document.getElementById("startTrail").setAttribute("target", "initOpening()");
		} 
		else{
			alert("Don't forget, you'll need oxen to pull your wagon");
		}
}

function initBuy(item) {
    var t;
    if (item == "Oxen") {
        t = "<p>Advice on Oxen. How many yoke would you like to buy?</p>\
			<input type='text' value='' placeholder='Number of Yoke' onkeypress='return itemValidation(event)'></input><br><button class='button' id='oxenOption' onclick='checkValid(OXEN)'><span>Buy It!</span></button><div id='errMsg'></div>";
    }
    else if (item == "Clothes") {
        t = "<p>Advice on Clothes. How many pairs of clothes would you like to buy?</p>\
			<input type='text' value='' placeholder='Number of Clothes' onkeypress='return itemValidation(event)'></input><br><button class='button' id='clothingOption' onclick='checkValid(CLOTHING)'><span>Buy It!</span></button><div id='errMsg'></div>";
    }
    else if (item == "Food") {
        t = "<p>Advice on Food. How much food in pounds would you like to buy?</p>\
			<input type='text' value='' placeholder='Number of Food' onkeypress='return itemValidation(event)'></input><br><button class='button' id='foodOption' onclick='checkValid(FOOD)'><span>Buy It!</span></button><div id='errMsg'></div>";
    }
    else if (item == "Bait") {
        t = "<p>Advice on Bait. How many buckets of bait would you like to buy?</p>\
			<input type='text' value='' placeholder='Number of Buckets' onkeypress='return itemValidation(event)'></input><br><button class='button' id='baitOption' onclick='checkValid(BAIT)'><span>Buy It!</span></button><div id='errMsg'></div>";
    }
    else if (item == "Wagon") {
        t = "<p>Advice on Wagon.<br><br>\
		How many wheels would you like to buy? <input type='text' id='wheel' value='' placeholder='Number of Wheels' onkeypress='return itemValidation(event)'></input><br>\
		How many axles would you like to buy? <input  type='text' id='axle' value='' placeholder='Number of Axles' onkeypress='return itemValidation(event)'></input><br>\
		How many tongues would you like to buy? <input type='text' id='tongue' value='' placeholder='Number of Tongues' onkeypress='return itemValidation(event)'></input><br></p>\
		<button class='button' id='partsOption' onclick='checkValid(PARTS)'><span>Buy It!</span></button><div id='errMsg'></div>";
    }
    document.getElementsByClassName("container")[0].innerHTML = t;
}

//validate input for buying items
//user can enter a value and press enter button = buy it button
function itemValidation(input){
	var key;
	document.getElementById ? key = input.keyCode: key = input.which;
	
	var id = document.getElementsByClassName("button")[0].id;
	console.log(id);
	if(event.keyCode == 13){
		if(id == "oxenOption")
			checkValid(OXEN);
		
		else if(id == "clothingOption")
			checkValid(CLOTHING);
		
		else if(id == "foodOption")
			checkValid(FOOD);
			
		
		else if(id == "baitOption")
			checkValid(BAIT);
			
		else if(id == "partsOption")
			checkValid(PARTS);
			
	}

	return ((key > 47 && key < 58) || key == 8 || key == 13);
}

function checkValid(index) {
    var tempBalance, tempValue;
    var tempInputs = document.getElementsByTagName("input");
    var patt = /^\d+$/;
    if (index == PARTS) {
        var total = 0;
        var i;
        for (i = 0; i < tempInputs.length; i++) {
            if (!(patt.test(tempInputs[i].value))) {
                document.getElementById("errMsg").innerHTML = "<p>Please enter a number for each part!</p>";
                return;
            }
            total += parseInt(tempInputs[i].value);
        }
        console.log(total);
        tempValue = tempSupplies[index];
        tempSupplies[index] = total;
        tempBalance = supplies[MONEY] - ((price[OXEN_COST] * tempSupplies[OXEN]) + (price[CLOTHING_COST] * tempSupplies[CLOTHING]) + (price[FOOD_COST] * tempSupplies[FOOD]) + (price[BAIT_COST] * tempSupplies[BAIT]) + (price[WAGON_COST] * tempSupplies[PARTS]));
        if (tempBalance < 0) {
            tempSupplies[index] = tempValue;
            document.getElementById("errMsg").innerHTML = "<label>You do not have enough money to do that!</label>";
        }
        else {
            tempParts[WHEEL] = parseInt(tempInputs[0].value);
            tempParts[AXLE] = parseInt(tempInputs[1].value);
            tempParts[TONGUE] = parseInt(tempInputs[2].value);
            initStore();
        }
    }
    else {
        if (patt.test(tempInputs[0].value)) {
            tempValue = tempSupplies[index];
            if (index == OXEN) tempSupplies[index] = parseInt(tempInputs[0].value) * 2;
            else if (index == BAIT) tempSupplies[index] = parseInt(tempInputs[0].value) * 20;
            else tempSupplies[index] = parseInt(tempInputs[0].value);
            tempBalance = supplies[MONEY] - ((price[OXEN_COST] * tempSupplies[OXEN]) + (price[CLOTHING_COST] * tempSupplies[CLOTHING]) + (price[FOOD_COST] * tempSupplies[FOOD]) + (price[BAIT_COST] * tempSupplies[BAIT]) + (price[WAGON_COST] * tempSupplies[PARTS]));
            if (tempBalance < 0) {
                tempSupplies[index] = tempValue;
                document.getElementById("errMsg").innerHTML = "<label>You do not have enough money to do that!</label>";
            }
            else initStore();
        }
        else document.getElementById("errMsg").innerHTML = "<label>Please enter a number!</label>";
    }
}


function tempTransfer() {
    supplies[MONEY] = supplies[MONEY] - ((price[OXEN_COST] * tempSupplies[OXEN]) + (price[CLOTHING_COST] * tempSupplies[CLOTHING]) + (price[FOOD_COST] * tempSupplies[FOOD]) + (price[BAIT_COST] * tempSupplies[BAIT]) + (price[WAGON_COST] * tempSupplies[PARTS]));
    var i;
    for (i = 0; i < supplies.length; i++) supplies[i] += tempSupplies[i];
    for (i = 0; i < parts.length; i++) parts[i] += tempParts[i];
    tempSupplies = [0, 0, 0, 0, 0, 0];
    tempParts = [0, 0, 0];
}

function initOpening() {
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
									Independence: " + IndepDay + " 1, 1848 <br> Click Space to begin your journey</div>\
			</div> ";
    document.getElementsByClassName("container")[0].innerHTML = t;
    $(document).keypress(function (e) {
        if (e.keyCode == SPACEBAR) {
            $(this).unbind();
            locationInfo();
        }
    });
}

function checkSupplies() {
    var t = "<p>Your Supplies:<br>\
			Oxen: " + supplies[OXEN] + "<br>\
			Sets of Clothing: " + supplies[CLOTHING] + "<br>\
			Bait: " + supplies[BAIT] + "<br>\
			Wagon Wheels: " + parts[WHEEL] + "<br>\
			Wagon Axles: " + parts[AXLE] + "<br>\
			Wagon Tongues: " + parts[TONGUE] + "<br>\
			Pounds of Food: " + supplies[FOOD] + "<br>\
			Money Left: $" + supplies[MONEY] + "</p>\
			" + spaceTxt;
    document.getElementsByClassName("container")[0].innerHTML = t;
    $(document).keypress(function (e) {
        if (e.keyCode == SPACEBAR) {
            $(this).unbind();
            locationInfo();
        }
    });
}

function paceInfo() {
    var t = "<p>Pace Info Here</p>" + spaceTxt;
    document.getElementsByClassName("container")[0].innerHTML = t;
    $(document).keypress(function (e) {
        if (e.keyCode == SPACEBAR) {
            $(this).unbind();
            changePace();
        }
    });
}

function setPace(pace) {
    currPace = pace;
    if (pace == "Steady") gameStatus[PACE] = STEADY;
    else if (pace == "Strenuous") gameStatus[PACE] = STRENUOUS;
    else if (pace == "Grueling") gameStatus[PACE] = GRUELING;
    locationInfo();
}

function changePace() {
    var t = "<div id='paceOptions'><label>Change pace<br>\
			(currently: " + currPace + ")<br><br>\
			The pace at which you travel can change.<br>\
			Your choices are:</label><br>\
			<button class='button' value='Steady' onclick='setPace(this.value)'><span>Steady</span></button><br>\
			<button class='button' value='Strenuous' onclick='setPace(this.value)'><span>Strenuous</span></button><br>\
			<button class='button' value='Grueling' onclick='setPace(this.value)'><span>Grueling</span></button><br>\
			<button class='button' onclick='paceInfo()'><span>Pace Information</span></button></div>"
    document.getElementsByClassName("container")[0].innerHTML = t;
}

function setRations(rations) {
    currRations = rations;
    if (rations == "Filling") gameStatus[RATIONS] = FILLING;
    else if (rations == "Meager") gameStatus[RATIONS] = MEAGER;
    else if (rations == "Bare Bones") gameStatus[RATIONS] = BAREBONES;
    locationInfo();
}

function changeRations() {
    var t = "<div id='foodOptions'><label>Change food rations<br>\
			(currently: " + currRations + ")<br><br>\
			The amount of food the people in your party eat each day can change.</label><br>\
			<button class='button' value='Filling' onclick='setRations(this.value)'><span>Filling</span></button> <label>- Meals are large and generous.</label><br>\
			<button class='button' value='Meager' onclick='setRations(this.value)'><span>Meager</span></button> <label>- Meals are small, but adequate.</label><br>\
			<button class='button' value='Bare Bones' onclick='setRations(this.value)'><span>Bare Bones</span></button> <label>- Meals are very small; everyone stays hungry.</label><br>\</div>";
    document.getElementsByClassName("container")[0].innerHTML = t;
}

function getIndex(str){
	if(str == "OXEN") return OXEN;
	if(str == "CLOTHING") return CLOTHING;
	if(str == "BAIT") return BAIT;
	if(str == "FOOD") return FOOD;
	if(str == "WHEEL") return WHEEL;
	if(str == "AXLE") return AXLE;
	if(str == "TONGUE") return TONGUE;
	if(str == "PARTS") return OXEN;
}

function buyItem(item){
	var index = getIndex(item);
	var amount = document.getElementById("buy").value;
	var patt = /^\d+$/;
	if(!(patt.test(amount)))
		document.getElementById("errMsg").innerHTML = "Please enter a number!";
	else if(item == "WHEEL" || item == "AXLE" || item == "TONGUE"){
		amount = parseInt(amount);
		if((price[WAGON_COST]*amount) <= supplies[MONEY]){
			supplies[PARTS] += amount;
			parts[index] += amount;
			supplies[MONEY] -= (price[WAGON_COST]*amount);
			if(brokenPart == index){supplies[PARTS]--; parts[index]--; brokenPart = 3;}
			buySupplies();
		}
		else
			document.getElementById("errMsg").innerHTML = "You do not have enough money to do that!";
	}
	else{
		amount = parseInt(amount);
		var priceIndex;
		if(item == "OXEN")
			priceIndex = OXEN_COST;
		else if(item == "CLOTHING")
			priceIndex = CLOTHING_COST;
		else if(item == "BAIT"){
			priceIndex = BAIT_COST;
			amount *= 20;
		}
		else if(item == "FOOD")
			priceIndex = FOOD_COST;
		if((price[priceIndex]*amount) <= supplies[MONEY]){
			supplies[index] += amount;
			supplies[MONEY] -= (price[priceIndex]*amount);
			buySupplies();
		}
		else
			document.getElementById("errMsg").innerHTML = "You do not have enough money to do that!";
	}
}

function setItem(item){
	if(item == "OXEN") 
		document.getElementById("selectItem").innerHTML = "<label>How many oxen?</label> <input id='buy' value=''></input> <button class='button' value='OXEN' onclick='buyItem(this.value)'><span>Buy It!</span></button>";
	else if(item == "CLOTHING") 
		document.getElementById("selectItem").innerHTML = "<label>How many sets?</label> <input id='buy' value=''></input> <button class='button' value='CLOTHING' onclick='buyItem(this.value)'><span>Buy It!</span></button>";
	else if(item == "BAIT") 
		document.getElementById("selectItem").innerHTML = "<label>How many buckets?</label> <input id='buy' value=''></input> <button class='button' value='BAIT' onclick='buyItem(this.value)'><span>Buy It!</span></button>";
	else if(item == "WHEEL") 
		document.getElementById("selectItem").innerHTML = "<label>How many wheels?</label> <input id='buy' value=''></input> <button class='button' value='WHEEL' onclick='buyItem(this.value)'><span>Buy It!</span></button>";
	else if(item == "AXLE") 
		document.getElementById("selectItem").innerHTML = "<label>How many axles?</label> <input id='buy' value=''></input> <button class='button' value='AXLE' onclick='buyItem(this.value)'><span>Buy It!</span></button>";
	else if(item == "TONGUE") 
		document.getElementById("selectItem").innerHTML = "<label>How many tongues?</label> <input id='buy' value=''></input> <button class='button' value='TONGUE' onclick='buyItem(this.value)'><span>Buy It!</span></button>";
	else if(item == "FOOD") 
		document.getElementById("selectItem").innerHTML = "<label>How many pounds?</label> <input id='buy' value=''></input> <button class='button' value='FOOD' onclick='buyItem(this.value)'><span>Buy It!</span></button>";
}

function buySupplies(){
	var t = "<h2>"+currLocation+"<br>"+months[month]+" "+day+", "+year+"</h2>\
			<p>You may buy:</p><br>\
			<button class='button' value='OXEN' onclick='setItem(this.value)'><span>Oxen</span></button><label>- $20 per ox</label><br>\
			<button class='button' value='CLOTHING' onclick='setItem(this.value)'><span>Clothing</span></button><label>- $10 per set</label><br>\
			<button class='button' value='BAIT' onclick='setItem(this.value)'><span>Bait</span></button><label>- $2 per bucket</label><br>\
			<button class='button' value='WHEEL' onclick='setItem(this.value)'><span>Wagon Wheels</span></button><label>- $10 per wheel</label><br>\
			<button class='button' value='AXLE' onclick='setItem(this.value)'><span>Wagon Axles</span></button><label>- $10 per axle</label><br>\
			<button class='button' value='TONGUE' onclick='setItem(this.value)'><span>Wagon Tongues</span></button><label>- $10 per tongue</label><br>\
			<button class='button' value='FOOD' onclick='setItem(this.value)'><span>Food</span></button><label>- $0.20 per pound</label><br>\
			<button class='button' onclick='locationInfo()'><span>Leave</span></button> <br>\
			<div><label>You have $"+supplies[MONEY]+" to spend.</label></div><br>\
			<div id='selectItem'><label>What would you like to buy?</label></div>\
			<label id='errMsg'></label>";
	document.getElementsByClassName("container")[0].innerHTML = t;
}

function ford(){
		currLocation = "";
        var t = "<img src='Ford.JPG' id='bkg' style = 'position:absolute; width:100%; height:100%;' alt='Mountain View'>\
        <img src='Cross.png' id='ok' style = 'position:absolute; width: 180px; length: 300px; bottom:20px; right: 85%;' alt='Mountain View'>";
        document.getElementsByClassName("container")[0].innerHTML = t;
        var death = 10;
        $(document).ready(function(){
			death = (Math.floor(Math.random()*10));
            if(death < 8)
                $("#ok").animate({right: '10%'},10000,function(){alert("You made it across perfectly fine!"); tempTraveled++; totalTraveled++; mainGame();});
            else{
                $("#ok").animate({right: '600px'},5000,function(){$("#ok").attr("src", "Capsize.png"); tempTraveled++; totalTraveled++; alert("You capsized!");});//add who dies and what supplies are lost here
                $("#ok").delay(3000).animate({right: '10%'},10000,function(){mainGame();});
            }
        });
}

function fishResults(){
	document.getElementsByClassName("container")[0].innerHTML = "<p>You were able to get "+(supplies[FOOD]-tempSupplies[FOOD])+" pounds of food from fishing." + spaceTxt + "</p>";
	$(document).keypress(function(e){
		if(e.keyCode == SPACEBAR){
			$(this).unbind();
			locationInfo();
		}
	});
}

function castLine(){
	if(supplies[BAIT] == 0) {document.getElementById("fishMsg").innerHTML = "You have no more bait left."; return;}
	document.getElementById("contFish").setAttribute("onclick", ""); document.getElementById("stopFish").setAttribute("onclick", "");
	var i;
	document.getElementById("fishMsg").innerHTML = "You cast your line";
	setTimeout(function(){document.getElementById("fishMsg").innerHTML += ".";}, 1000); setTimeout(function(){document.getElementById("fishMsg").innerHTML += ".";}, 2000);
	setTimeout(function(){document.getElementById("fishMsg").innerHTML += ".";}, 3000); 
	
	setTimeout(function(){
		var randNum = 2;
		if(job == "Fisher") randNum++;
		var randFish = Math.floor(Math.random() * (randNum));
		if(randFish == 1 || randFish == 2){
			var typeFish = Math.floor(Math.random() * (3));
			if(typeFish == 0){document.getElementById("fishMsg").innerHTML = "You caught a fish! It is small, but at least it's something."; supplies[BAIT] -= 5; supplies[FOOD] += 3;}
			else if(typeFish == 1){document.getElementById("fishMsg").innerHTML = "You caught a fish! It is average-sized."; supplies[BAIT] -= 5; supplies[FOOD] += 5;}
			else if(typeFish == 2){document.getElementById("fishMsg").innerHTML = "You caught a huge fish! You are filled with determination."; supplies[BAIT] -= 5; supplies[FOOD] += 10;}
		}
		else{document.getElementById("fishMsg").innerHTML = "You were unable to catch anything. You fucking suck!"; supplies[BAIT] -= 5;}
		if(supplies[BAIT] < 0) supplies[BAIT] = 0;
		document.getElementById("baitAmt").innerHTML = supplies[BAIT];
		document.getElementById("contFish").setAttribute("onclick", "castLine()"); document.getElementById("stopFish").setAttribute("onclick", "fishResults()");
	}, 4000);
}

function fish(){
	tempSupplies[FOOD] = supplies[FOOD];
	var t = "<p>Amount of bait left: <span id='baitAmt'>"+supplies[BAIT]+"</span><br>\
			<label id='fishMsg'></label></p>\
			<button onclick='castLine()' id='contFish' class='button'><span>Attempt to Fish</span></button><br>\
			<button onclick='fishResults()' id='stopFish' class='button'><span>Stop Fishing</span></button>"
	document.getElementsByClassName("container")[0].innerHTML = t;
}

function ferryFinish(){
	if(supplies[MONEY] < 5) document.getElementsByClassName("container")[0].innerHTML = "<p>You do not have enough money to ride the ferry!"+spaceTxt+"</p>";
	else{
		document.getElementsByClassName("container")[0].innerHTML = "<p>You wait "+ferryWait+" days and take the ferry across the river."+spaceTxt+"</p>";
		changeWeather();
		var i;
		for(i = 0; i < ferryWait; i++) eatFood();
		ferryWait = 0;
	}
	$(document).keypress(function(e){
		$(this).unbind();
		if(supplies[MONEY] < 5) riverOptions();
		else {supplies[MONEY] -= 5; currLocation=""; tempTraveled++; totalTraveled++; mainGame();}
	});
}

function ferry(){
	if(ferryWait == 0) ferryWait = Math.floor(Math.random() * (5)) + 1;
	document.getElementsByClassName("container")[0].innerHTML = "<p>The ferry can take you across the river safely. It will cost $5, and you will have to wait for "+ferryWait+" days.<br>\
																Do you want to take the ferry?</p> <button onclick='ferryFinish()' class='button'><span>Yes</span></button><br><button onclick='riverOptions()' class='button'><span>No</span></button>";
}

function riverOptions(){
	randMsg = "";
	document.getElementsByClassName("container")[0].innerHTML = "<h2>" + currLocation + "<br>" + months[month] + " " + day + ", " + year + "</h2>\
																<p id='river'>Info about crossing river.<br>Press SPACE BAR to Continue</p>";
	var t = "<p>Weather: "+currWeather+"<br>\
			River width: ?? feet <br>River depth: ?? feet<br>\
			You may: <br><br>\
			<button class='button' onclick='ford()'><span>Ford the River</span></button><br>\
			<button class='button' onclick=''><span>Float the Wagon</span></button><br>\
			<button class='button' onclick='ferry()'><span>Take a Ferry</span></button><br>\
			<button class='button' onclick=''><span>Wait</span></button><br>\
			<button class='button' onclick=''><span>Get Information</span></button></p>";
			
	$(document).keypress(function(e){
		if(e.keyCode == SPACEBAR){
			$(this).unbind();
			document.getElementById("river").innerHTML = t;
		}
	});
}

function rest(){
	var daysInput;
	var t = "<p>How many days would you like to rest?</p>\
			<input id='restDays' value='' maxlength='1' size='4' onkeypress='return restInput(event)'><br>\
			<button id='rest' class='button'>Submit</button>";
			
	document.getElementsByClassName("container")[0].innerHTML = t;
		
		$("#rest").click(function(){
			daysInput = $("#restDays").val();
			day += parseInt(daysInput);
			setDate();
			changeWeather();
			var i;
			for(i = 0; i < daysInput; i++) {eatFood(); addTeamHP(5);}
			locationInfo();
		});	
}

//validate input for rest input
function restInput(input){
	var key;
	document.getElementById ? key = input.keyCode: key = input.which;
	return ((key > 47 && key < 58) || key == 8 || key == 13);
}

function tradeAccept(type, amt, typePart){
	supplies[type[0]] += amt[0];
	supplies[type[1]] -= amt[1];
	if(type[0] == PARTS) {if(brokenPart == typePart[0]){brokenPart = 3; supplies[PARTS]--;} else parts[typePart[0]]++;}
	if(type[1] == PARTS) parts[typePart[1]]--;
	locationInfo();
}

function trade(){
	day++;
	eatFood();
	changeWeather();
	var canTrade = 1;
	var tradeAmt = [0,0];
	var tradeItem = ["",""];
	var rand = [0,0];
	var randPart = [0,0];
	//If 1 then someone wants to trade
	if(Math.floor(Math.random() * (2))){
		var i;
		for(i = 0; i < 2; i++){
			rand[i] = Math.floor(Math.random() * (5)) + 1;
			if(i == 1){
				if(rand[1] == rand[0]){if(rand[1] == 5) rand[1]--; else rand[1]++;}
			}
			if(rand[i] == FOOD) {tradeAmt[i] = 100; tradeItem[i] = "pounds of food";}
			else if(rand[i] == BAIT) {tradeAmt[i] = 200; tradeItem[i] = "bait";}
			else if(rand[i] == OXEN) {tradeAmt[i] = 1; tradeItem[i] = "ox";}
			else if(rand[i] == CLOTHING) {tradeAmt[i] = 2; tradeItem[i] = "sets of clothing";}
			else if(rand[i] == PARTS){
				randPart[i] = Math.floor(Math.random() * (3))
				if(randPart[i] == WHEEL) {tradeAmt[i] = 1; tradeItem[i] = "wagon wheel";}
				else if(randPart[i] == AXLE) {tradeAmt[i] = 1; tradeItem[i] = "wagon axle";}
				else if(randPart[i] == TONGUE) {tradeAmt[i] = 1; tradeItem[i] = "wagon tongue";}
			}
		}
		//Make sure you have enough to trade
		if(rand[1] == PARTS){if(parts[randPart[1]] < 1) canTrade = 0;}
		else if(supplies[rand[1]] < tradeAmt[1]) canTrade = 0;
		var t = "<p>A fellow traveler would like to offer you " + tradeAmt[0] + " " + tradeItem[0] + " for " + tradeAmt[1] + " " + tradeItem[1];
		if(canTrade) t += ".<br>Do you accept the offer?</p> <button id='acceptTrade' class='button'>Yes</button><br><button id='back' class='button'>No</button>";
		else t += ",<br>but you do not have the supplies to trade.</p> <button id='back' class='button'>Back</button>";
		document.getElementsByClassName("container")[0].innerHTML = t;
	}
	//No one wants to trade
	else{
		document.getElementsByClassName("container")[0].innerHTML = "<p>There is no trade offer today.</p><button id='back' class='button'>Back</button>"
	}
	$("#acceptTrade").click(function() {$(this).unbind(); $("#back").unbind(); tradeAccept(rand, tradeAmt, randPart);});
	$("#back").click(function(){$(this).unbind(); $("#acceptTrade").unbind(); locationInfo();});
}

function firstDRoute1(){
	locations.push.apply(locations, ["Green River crossing", "Soda Springs", "Fort Hall", "Snake River crossing", "Fort Boise", "Blue Mountains"]);
	distance.push.apply(distance, [57, 143, 57, 182, 113, 160]);
	locType.push.apply(locType, [RIVER, 0, TOWN, RIVER, TOWN, DIVIDE2]);
	mainGame();
}
function firstDRoute2(){
	locations.push.apply(locations, ["Fort Bridger", "Soda Springs", "Fort Hall", "Snake River crossing", "Fort Boise", "Blue Mountains"]);
	distance.push.apply(distance, [125, 162, 57, 182, 113, 160]);
	locType.push.apply(locType, [TOWN, 0, TOWN, RIVER, TOWN, DIVIDE2]);
	mainGame();
}
function secondDRoute1(){
	locations.push.apply(locations, ["Fort Walla Walla", "The Dalles", "Willamette Valley"]);
	distance.push.apply(distance, [55, 120, 100]);
	locType.push.apply(locType, [TOWN, 0, END]);
	mainGame();
}
function secondDRoute2(){
	locations.push.apply(locations, ["The Dalles", "Willamette Valley"]);
	distance.push.apply(distance, [125, 100]);
	locType.push.apply(locType, [0, END]);
	mainGame();
}

function leaveTown(){
	if(supplies[OXEN] <= 0){alert("You need oxen to continue on the trail!"); return;}
	else if(brokenPart == WHEEL){alert("You need to replace your broken wheel to continue on the trail!"); return;}
	else if(brokenPart == AXLE){alert("You need to replace your broken axle to continue on the trail!"); return;}
	else if(brokenPart == TONGUE){alert("You need to replace your broken tongue to continue on the trail!"); return;}
	
	randMsg = "";
	currLocation = "";
	if(currType == DIVIDE1) document.getElementsByClassName("container")[0].innerHTML = "<p>There are two different routes to take.<br>Where would you like to go to next?<br><br>\
																						<button onclick='firstDRoute1()' class='button'><span>Green River crossing</span></button><br>\
																						<button onclick='firstDRoute2()' class='button'><span>Fort Bridger</span></button></p>";
	else if(currType == DIVIDE2) document.getElementsByClassName("container")[0].innerHTML = "<p>There are two different routes to take.<br>Where would you like to go to next?<br><br>\
																						<button onclick='secondDRoute1()' class='button'><span>Fort Walla Walla</span></button><br>\
																						<button onclick='secondDRoute2()' class='button'><span>The Dalles</span></button></p>";
	else{mainGame();}
}

function locationInfo() {
	setHealth();
	setDate();
    var t = "";
    //Checking if in town or on the trail
    if (currLocation != "") t += "<h2>" + currLocation + "<br>" + months[month] + " " + day + ", " + year + "</h2>";
    else t += "<h2>" + months[month] + " " + day + ", " + year + "</h2>"
    t += "<p>Weather: " + currWeather + "<br>\
			Health: " + currHealth + "<br>\
			Pace: " + currPace + "<br>\
			Rations: " + currRations + "<br>\</p>\
			<div id='townOptions'><p>You may:</p><br><br>\
			<button class='button' onclick=''><span>Continue on trail</span></button><br>\
			<button class='button' onclick='checkSupplies()'><span>Check supplies</span></button><br>\
			<button class='button' onclick=''><span>Look at map</span></button><br>\
			<button class='button' onclick='changePace()'><span>Change pace</span></button><br>\
			<button class='button' onclick='changeRations()'><span>Change food rations</span></button><br>\
			<button class='button' onclick='rest()'><span>Stop to rest</span></button><br>\
			<button class='button' onclick='trade()'><span>Attempt to trade</span></button><br>";
    if (currLocation != "") {
		t += "<button class='button' onclick=''><span>Talk to people</span></button><br>";
		if(currType == TOWN) t += "<button class='button' onclick='buySupplies()'><span>Buy Supplies</span></button><br>";
		else if(currType == RIVER)t += "<button class='button' onclick='fish()'><span>Go Fishing</span></button><br>"
	}
    t += "</div>";
    document.getElementsByClassName("container")[0].innerHTML = t;
	if(currType == RIVER && tempTraveled == 0) document.getElementsByClassName("button")[0].setAttribute("onclick", "riverOptions()");
	else document.getElementsByClassName("button")[0].setAttribute("onclick", "leaveTown()");
}

function stopLocation() {
    var t = "<p><label>"+randMsg+"</label><br>You have reached " + currLocation + ".<br> Do you want to look around?</p>\
			<button class='button' onclick='locationInfo()'><span>Yes</span></button>&nbsp<button class='button' onclick=''><span>No</span></button>";
    document.getElementsByClassName("container")[0].innerHTML = t;
	if(currType == RIVER) document.getElementsByClassName("button")[1].setAttribute("onclick", "riverOptions()");
	else document.getElementsByClassName("button")[1].setAttribute("onclick", "leaveTown()");
	//if(randMsg != ""){alert(randMsg); randMsg = "";}
	randMsg = "";
}

function addTeamHP(num){
	var i;
	for(i = 0; i < hp.length; i++){
		if(hp[i] > 0 && hp[i] < 100){
			hp[i] += num;
			if(hp[i] > 100) hp[i] = 100;
		}
	}
}

function reduceTeamHP(num){
	var i;
	for(i = 0; i < hp.length; i++){
		if(hp[i] > 0){
			hp[i] -= num;
			if(hp[i] <= 0) {numCharacters--; alert(characters[i]+" has died!");}
		}
	}
}

function reduceCharHP(index, num){ 
	hp[index] -= num;
	if(hp[index] <= 0) {numCharacters--; alert(characters[index]+" has died!");}
}

//Adjusting the date
function setDate(){
    if (day > monthDays[month]) {
        day = day % monthDays[month];
        if (month == 11) {
            month = 0;
            year++;
        }
        else month++;
    }
}
	
function setHealth(){
	var totalHP = 0;
	var i;
	for(i = 0; i < hp.length; i++) {if(hp[i] > 0) totalHP += hp[i];}
	if(totalHP >= 350) {gameStatus[HEALTH] = GOOD; currHealth = "Good";}
	else if(totalHP >= 250) {gameStatus[HEALTH] = FAIR; currHealth = "Fair";}
	else if(totalHP >= 150) {gameStatus[HEALTH] = POOR; currHealth = "Poor";}
	else {gameStatus[HEALTH] = VERYPOOR; currHealth = "Very Poor";}
}

function eatFood(){
	if(supplies[FOOD] == 0) reduceTeamHP(10);
	else{
		var num;
		if(gameStatus[RATIONS] == FILLING) num = 3;
		else if(gameStatus[RATIONS] == MEAGER) {num = 2; reduceTeamHP(2);}
		else if(gameStatus[RATIONS] == BAREBONES) {num = 1; reduceTeamHP(5);}
		var pounds = num * numCharacters;
		if(pounds > supplies[FOOD]) supplies[FOOD] = 0;
		else supplies[FOOD] -= pounds;
	}
}

function changeWeather(){
	var num = Math.floor(Math.random() * (6));
	gameStatus[WEATHER] = num;
	if(num == COLD) currWeather = "Cold";
	else if(num == COOL) currWeather = "Cool";
	else if(num == RAINY) currWeather = "Rainy";
	else if(num == WARM) currWeather = "Warm";
	else if(num == HOT) currWeather = "Hot";
	else if(num == VERYRAINY) currWeather = "Very Rainy";
}

function randomEvent(){
	var rand = 4;
	if(gameStatus[WEATHER] == RAINY) rand++;
	else if(gameStatus[WEATHER] == VERYRAINY) rand += 2;
	var num = Math.floor(Math.random() * (rand));
	console.log("num: " + num);
	if(num == 0){
		randMsg = "You get lost on the trail! Lose 1 day.";
		eatFood();
		day++;
	}
	else if(num == 1){
		var tempMsg = "";
		var diseases = ["Typhoid Fever", "Cholera", "Dysentery", "Measles", "Diphtheria"];
		var tempIndicies = [];
		for(i = 0; i < hp.length; i++) {if(hp[i] > 0) tempIndicies.push(i);}
		var randIndex = Math.floor(Math.random() * (tempIndicies.length));
		if(hp[tempIndicies[randIndex]] < 40 || Math.floor(Math.random() * (2)) == 1){
			tempMsg += characters[tempIndicies[randIndex]] + " has " + diseases[Math.floor(Math.random() * (5))] + ".";
			reduceCharHP(tempIndicies[randIndex], 15);
		}

		randMsg = tempMsg;
	}
	else if(num == 2){
		brokenPart = Math.floor(Math.random() * (3));
		var tempMsg;
		if(brokenPart == WHEEL) tempMsg = "The wagon's wheel broke!";
		else if(brokenPart == AXLE) tempMsg = "The wagon's axle broke!";
		else if(brokenPart == TONGUE) tempMsg = "The wagon's tongue broke!";
		randMsg = tempMsg;
	}
	else if(num == 3){
		var randThief = Math.floor(Math.random() * (4));
		if(randThief == 0 && supplies[OXEN] > 0){
			var sOxen = Math.floor(Math.random() * (3)) + 1;
			if(sOxen > supplies[OXEN]) sOxen = supplies[OXEN];
			supplies[OXEN] -= sOxen;
			randMsg = "A thief stole " + sOxen + " oxen while you were sleeping!";
		}
		else if(randThief == 1 && supplies[CLOTHING] > 0){
			var sClothing = Math.floor(Math.random() * (5)) + 2;
			if(sClothing > supplies[CLOTHING]) sClothing = supplies[CLOTHING];
			supplies[CLOTHING] -= sOxen;
			randMsg = "A thief stole " + sClothing + " sets of clothes while you were sleeping!";
		}
		else if(randThief == 2 && supplies[FOOD] > 0){
			var sFood = Math.floor(Math.random() * (151)) + 50;
			if(sFood > supplies[FOOD]) sFood = supplies[FOOD];
			supplies[FOOD] -= sFood;
			randMsg = "A thief stole " + sFood + " pounds of food while you were sleeping!";
		}
	}
	else if(num == 4 || num == 5){
		randDay = Math.floor(Math.random() * (3)) + 1;
		randMsg = "There is a severe storm! Lose "+randDay+" days";
		var i;
		for(i = 0; i < randDay; i++) eatFood();
		changeWeather();
		day += randDay;
	}
}

function checkMove(){
	if(supplies[OXEN] <= 0) {alert("You have no oxen to pull your wagon!"); return 0;}
	else if(brokenPart == WHEEL) {alert("Your wagon cannot move with a broken wheel!"); return 0;}
	else if(brokenPart == AXLE) {alert("Your wagon cannot move with a broken axle!"); return 0;}
	else if(brokenPart == TONGUE) {alert("Your wagon cannot move with a broken tongue!"); return 0;}
	return 1;
}

function travelTrail() {
	if(!checkMove()){ mainGame(); return;}
	randMsg = "";
    day++;
	eatFood();
	changeWeather();
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
	//Check if they lost
	if(numCharacters == 0) lostGame();
    else if (tempTraveled >= distance[0]) {
		//Check if they won
		if(locType[0] == END){gameDone = 1; endGame();}
		else{
			//Ask if they wish to stop here
			totalTraveled = totalTraveled - (tempTraveled - distance[0]);
			tempTraveled = 0;
			currLocation = locations.shift();
			currType = locType.shift();
			distance.shift();
			stopLocation();
			console.log(distance.length);
		}
	}
    else if (!gameDone) mainGame();
}

function mainGame() {
	setDate();
	setHealth();
    var t = "<p id='msg'>"+randMsg+"</p>\
			<button class='button' id='checkOptions'><span>Check Options</span></button>\
			<p id='info'>Date: " + months[month] + " " + day + ", " + year + "<br>\
			Weather: " + currWeather + "<br>\
			Health: " + currHealth + "<br>\
			Food: " + supplies[FOOD] + " pounds<br>\
			Next Landmark: " + (distance[0] - tempTraveled) + "<br>\
			Miles Traveled: " + totalTraveled + "</p>\
			" + spaceTxt;
    document.getElementsByClassName("container")[0].innerHTML = t;
    $(document).keypress(function (e) {
        if (e.keyCode == SPACEBAR) {
			$("#checkOptions").unbind();
            $(this).unbind();
            travelTrail();
        }
    });
    $("#checkOptions").click(function () {
        $(this).unbind();
        $(document).unbind();
        locationInfo();
    });
}

function lostGame(){
	document.getElementsByClassName("container")[0].innerHTML = "<h1>YOU LOSE FUCKER!!!</h1>";
}

function endGame() {
    document.getElementsByClassName("container")[0].innerHTML = "<h1>YOU WIN FUCKER!!!</h1>";
}