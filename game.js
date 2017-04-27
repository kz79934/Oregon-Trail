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
const COLD = 2;
const WARM = 3;
const HOT = 4;
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
var spaceTxt = "<div><p>Press SPACE BAR to Continue</p></div>";
//Distance is relative to the previous location (Ex: b is a 100 miles from a)
var locations = ["town a", "river 1", "town b", "river 2", "town c", "river 3", "town d", "end"];
var distance = [50, 50, 100, 75, 150, 100, 200, 250];
const TOWN = 1;
const RIVER = 2;
var locType = [TOWN, RIVER, TOWN, RIVER, TOWN, RIVER, TOWN, 0];
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
var gameDone = 0;
welcome();

function welcome() {
    var t = "<div class='container'>\
				<h1>The Oregon Trail!</h1>\
				<div id='innerPage'>\
				<button class='button' onclick='getOccupation()'><span>Travel the Trail</span></button><br>\
				<button class='button' onclick ='getInfo()'><span>Learn About the Trail</span></button><br>\
				<button class='button' onclick=''><span>Top 10 Players</span></button><br>\
				<button class='button' onclick=''><span>Toggle Sound</span></button><br>\
				<button class='button' onclick='quit()'><span>Quit</span></button><br>\
				</div>\
			</div>";
    document.getElementById("main").innerHTML = t;
}

function getOccupation() {
    var t = "<form><div class='container'><ul>\
				<li><input type='radio' id='f-option' name='occupation' value='Banker' onclick = 'displayOcc(this.value)'> <label for='f-option'>Banker</label> <div class='check'></div></li> <div id='info1' ></div>\
				<li><input type='radio' id='s-option' name='occupation' value='Carpenter' onclick = 'displayOcc(this.value)'> <label for='s-option'>Carpenter</label> <div class='check'><div class='inside'></div></div></li> <div id='info2' ></div>\
				<li><input type='radio' id='t-option' name='occupation' value='Farmer' onclick = 'displayOcc(this.value)' > <label for='t-option'>Farmer</label> <div class='check'><div class='inside'></div></div> </li> <div id='info3' ></div>\
				<li><input type='radio' id='u-option' name='occupation' value='Outlaw' onclick = 'displayOcc(this.value)' > <label for='u-option'>Outlaw</label> <div class='check'><div class='inside'></div></div> </li> <div id='info4' ></div>\
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
    else if (occupation == "Outlaw") {
        document.getElementById("info4").innerHTML = "<p>You start with basically no money, but you can rob people. Be sure not to get arrested as there are dire consequences.</p>";
        supplies[MONEY] = 200.00;
		
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

//validate input for alpha
function alphaVal(input){
	var key;
	document.getElementById ? key = input.keyCode: key = input.which;
	return ((key > 64 && key < 91) || (key > 96 && key < 123) || key == 8 || key == 39 || key == 16);
}

function getLeaderName() {
    characters = ["Andrew", "Kathy", "LeBron", "Barbara", "Frank"];
    var t = "<p>What is the first name of your leader?</p>\
			<input id='leader' type='text' value='' placeholder='First Name' onkeypress='return alphaVal(event)'></input><br><button class='button' onclick='getNames()'><span>Next</span></button>"
    document.getElementById("innerPage").innerHTML = t;
}

function getNames() {
    var leaderName = document.getElementById("leader").value;
    if (leaderName.replace(/\s/g, "") != "") characters[0] = leaderName;
    var t = "<p>What are the first names of the other members in your party?<br>\
			The leader's name is " + characters[0] + ".</p>\
			<input class='names' type='text' value='' placeholder='First Member' onkeypress='return alphaVal(event)'></input><br>\
			<input class='names' type='text' value='' placeholder='Second Member' onkeypress='return alphaVal(event)'></input><br>\
			<input class='names' type='text' value='' placeholder='Third Member' onkeypress='return alphaVal(event)'></input><br>\
			<input class='names' type='text' value='' placeholder='Fourth Member' onkeypress='return alphaVal(event)'></input><br><br>\
			<button class='button' onclick='getLeaderName()'><span>Back</span></button><br>\
			<button class='button' onclick='finalizeNames()'><span>Next</span></button>";
    document.getElementById("innerPage").innerHTML = t;
}

function finalizeNames() {
    var tempNames = document.getElementsByClassName("names");
    var i
    for (i = 1; i < 5; i++) {
        if ((tempNames[i - 1].value).replace(/\s/g, "") != "") characters[i] = tempNames[i - 1].value;
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
			<div><label>- A team of oxen to pull your wagon<br>- Clothing for both summer and winter<br>- Plenty of food for your trip<br>- Bait so you can fish<br>- Spare parts for your wagon</label></div><br>" + spaceTxt;
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
			<P class='blocktext'><p2>1. Oxen = $" + (price[OXEN_COST] * tempSupplies[OXEN]) + " <button class='button button1' value='Oxen' onclick='initBuy(this.value)'><span>Buy!</span></button> </p2><br>\
            <p2>2. Clothes = $" + (price[CLOTHING_COST] * tempSupplies[CLOTHING]) + " <button class='button button1' value='Clothes' onclick='initBuy(this.value)'><span>Buy!</span></button> </p2><br>\
            <p2>3. Food = $" + (price[FOOD_COST] * tempSupplies[FOOD]) + " <button class='button button1' value='Food' onclick='initBuy(this.value)'><span>Buy!</span></button> </p2><br>\
            <p2>4. Bait = $" + (price[BAIT_COST] * tempSupplies[BAIT]) + " <button class='button button1' value='Bait' onclick='initBuy(this.value)'><span>Buy!</span></button> </p2><br>\
            <p2>5. Spare Parts = $" + (price[WAGON_COST] * tempSupplies[PARTS]) + " <button class='button button1' value='Wagon' onclick='initBuy(this.value)'><span>Buy!</span></button> </p2></P><br><br>\
			<div><label>Balance After Purchase: $" + tempBalance + "</label></div><br>\
			<button class='button' id='startTrail' onclick=''><span>Start the Trail</span></button>";
    document.getElementsByClassName("container")[0].innerHTML = t;
    if (tempSupplies[OXEN] > 0) document.getElementById("startTrail").setAttribute("onclick", "initOpening()");
}

function initBuy(item) {
    var t;
    if (item == "Oxen") {
        t = "<p>Advice on Oxen. How many yoke would you like to buy?</p>\
			<input type='text' value='' placeholder='Number of Yoke'></input><br><button class='button' onclick='checkValid(OXEN)'><span>Buy It!</span></button><div id='errMsg'></div>";
    }
    else if (item == "Clothes") {
        t = "<p>Advice on Clothes. How many pairs of clothes would you like to buy?</p>\
			<input type='text' value='' placeholder='Number of Clothes'></input><br><button class='button' onclick='checkValid(CLOTHING)'><span>Buy It!</span></button><div id='errMsg'></div>";
    }
    else if (item == "Food") {
        t = "<p>Advice on Food. How much food in pounds would you like to buy?</p>\
			<input type='text' value='' placeholder='Number of Food'></input><br><button class='button' onclick='checkValid(FOOD)'><span>Buy It!</span></button><div id='errMsg'></div>";
    }
    else if (item == "Bait") {
        t = "<p>Advice on Bait. How many buckets of bait would you like to buy?</p>\
			<input type='text' value='' placeholder='Number of Brait'></input><br><button class='button' onclick='checkValid(BAIT)'><span>Buy It!</span></button><div id='errMsg'></div>";
    }
    else if (item == "Wagon") {
        t = "<p>Advice on Wagon.<br><br>\
		How many wheels would you like to buy? <input type='text' id='wheel' value='' placeholder='Number of Wheels'></input><br>\
		How many axels would you like to buy? <input  type='text' id='axel' value='' placeholder='Number of Axels'></input><br>\
		How many tongues would you like to buy? <input type='text' id='tongue' value='' placeholder='Number of Tongues'></input><br></p>\
		<button class='button' onclick='checkValid(PARTS)'><span>Buy It!</span></button><div id='errMsg'></div>";
    }
    document.getElementsByClassName("container")[0].innerHTML = t;
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
            tempParts[AXEL] = parseInt(tempInputs[1].value);
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
        else document.getElementById("errMsg").innerHTML = "Please enter a number!";
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
			Wagon Axels: " + parts[AXEL] + "<br>\
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
	if(str == "AXEL") return AXEL;
	if(str == "TONGUE") return TONGUE;
	if(str == "PARTS") return OXEN;
}

function buyItem(item){
	var index = getIndex(item);
	var amount = document.getElementById("buy").value;
	var patt = /^\d+$/;
	if(!(patt.test(amount)))
		document.getElementById("errMsg").innerHTML = "Please enter a number!";
	else if(item == "WHEEL" || item == "AXEL" || item == "TONGUE"){
		amount = parseInt(amount);
		if((price[WAGON_COST]*amount) <= supplies[MONEY]){
			supplies[PARTS] += amount;
			parts[index] += amount;
			supplies[MONEY] -= (price[WAGON_COST]*amount);
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
	else if(item == "AXEL") 
		document.getElementById("selectItem").innerHTML = "<label>How many axels?</label> <input id='buy' value=''></input> <button class='button' value='AXEL' onclick='buyItem(this.value)'><span>Buy It!</span></button>";
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
			<button class='button' value='AXEL' onclick='setItem(this.value)'><span>Wagon Axels</span></button><label>- $10 per axel</label><br>\
			<button class='button' value='TONGUE' onclick='setItem(this.value)'><span>Wagon Tongues</span></button><label>- $10 per tongue</label><br>\
			<button class='button' value='FOOD' onclick='setItem(this.value)'><span>Food</span></button><label>- $0.20 per pound</label><br>\
			<button class='button' onclick='locationInfo()'><span>Leave</span></button> <br>\
			<div><label>You have $"+supplies[MONEY]+" to spend.</label></div><br>\
			<div id='selectItem'><label>What would you like to buy?</label></div>\
			<label id='errMsg'></label>";
	document.getElementsByClassName("container")[0].innerHTML = t;
}

function ford(){
        var t = "<img src='Ford.JPG' id='bkg' style = 'position:absolute; width:100%; height:100%;' alt='Mountain View'>\
        <img src='Cross.png' id='ok' style = 'position:absolute; width: 180px; length: 300px; bottom:20px; right: 85%;' alt='Mountain View'>";
        document.getElementsByClassName("container")[0].innerHTML = t;
        var death = 10;
        $(document).ready(function(){
			death = (Math.floor(Math.random()*10));
            if(death < 8)
                $("#ok").animate({right: '10%'},10000,function(){alert("You made it across perfectly fine!"); mainGame();});
            else{
                $("#ok").animate({right: '600px'},5000,function(){$("#ok").attr("src", "Capsize.png");alert("You capsized!");});//add who dies and what supplies are lost here
                $("#ok").delay(3000).animate({right: '10%'},10000,function(){mainGame();});
            }
        });
}

function riverOptions(){
	document.getElementsByClassName("container")[0].innerHTML = "<h2>" + currLocation + "<br>" + months[month] + " " + day + ", " + year + "</h2>\
																<p id='river'>Info about crossing river.<br>Press SPACE BAR to Continue</p>";
	var t = "<p>Weather: "+currWeather+"<br>\
			River width: ?? feet <br>River depth: ?? feet<br>\
			You may: <br>\
			<button class='button' onclick='ford()'><span>Ford the River</span></button><br>\
			<button class='button' onclick=''><span>Float the Wagon</span></button><br>\
			<button class='button' onclick=''><span>Take a Ferry</span></button><br>\
			<button class='button' onclick=''><span>Wait</span></button><br>\
			<button class='button' onclick=''><span>Get Information</span></button></p>";
			
	$(document).keypress(function(e){
		if(e.keyCode == SPACEBAR){
			$(this).unbind();
			document.getElementById("river").innerHTML = t;
		}
	});
}

function locationInfo() {
    var t = "";
    //Checking if in town or on the trail
    if (tempTraveled == 0) t += "<h2>" + currLocation + "<br>" + months[month] + " " + day + ", " + year + "</h2>";
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
			<button class='button' onclick=''><span>Stop to rest</span></button><br>\
			<button class='button' onclick=''><span>Attempt to trade</span></button><br>";
    if (tempTraveled == 0) {
		t += "<button class='button' onclick=''><span>Talk to people</span></button><br>";
		if(currType == TOWN) t += "<button class='button' onclick='buySupplies()'><span>Buy Supplies</span></button><br>";
		else if(currType == RIVER)t += "<button class='button' onclick=''><span>Go Fishing</span></button><br>"
	}
    t += "</div>";
    document.getElementsByClassName("container")[0].innerHTML = t;
	if(currType == RIVER) document.getElementsByClassName("button")[0].setAttribute("onclick", "riverOptions()");
	else document.getElementsByClassName("button")[0].setAttribute("onclick", "travelTrail()");
}

function stopLocation() {
    var t = "<p>You have reached " + currLocation + ".<br> Do you want to look around?</p>\
			<button class='button' onclick='locationInfo()'><span>Yes</span></button>&nbsp<button class='button' onclick=''><span>No</span></button>";
    document.getElementsByClassName("container")[0].innerHTML = t;
	if(currType == RIVER) document.getElementsByClassName("button")[1].setAttribute("onclick", "riverOptions()");
	else document.getElementsByClassName("button")[1].setAttribute("onclick", "travelTrail()");
}

function eatFood(){
	//Add code later. Probably reduce health if no food.
	if(supplies[FOOD] == 0){
	}
	else{
		var num;
		if(gameStatus[RATIONS] == FILLING) num = 3;
		else if(gameStatus[RATIONS] == MEAGER) num = 2;
		else if(gameStatus[RATIONS] == BAREBONES) num = 1;
		var pounds = num * numCharacters;
		if(pounds > supplies[FOOD]) supplies[FOOD] = 0;
		else supplies[FOOD] -= pounds;
	}
}

function changeWeather(){
	var num = Math.floor(Math.random() * (5));
	gameStatus[WEATHER] = num;
	if(num == COLD) currWeather = "Cold";
	else if(num == COOL) currWeather = "Cool";
	else if(num == RAINY) currWeather = "Rainy";
	else if(num == WARM) currWeather = "Warm";
	else if(num == HOT) currWeather = "Hot";
}

function travelTrail() {
    day++;
	eatFood();
	changeWeather();
    if (gameStatus[PACE] == STEADY) {
        totalTraveled += 6;
        tempTraveled += 6;
    }
    else if (gameStatus[PACE] == STRENUOUS) {
        totalTraveled += 12;
        tempTraveled += 12;
    }
    else if (gameStatus[PACE] == GRUELING) {
        totalTraveled += 18;
        tempTraveled += 18;
    }
    //Check if they won
    if (tempTraveled >= distance[distance.length - 1]) {
        gameDone = 1;
        endGame();
    }
    else if (tempTraveled >= distance[0]) {
        //Ask if they wish to stop here
        totalTraveled = totalTraveled - (tempTraveled - distance[0]);
        tempTraveled = 0;
        currLocation = locations.shift();
		currType = locType.shift();
        distance.shift();
        stopLocation();
        console.log(distance.length);
    }
    else if (!gameDone) mainGame();
}

function mainGame() {
    //Adjusting the date
    if (day > monthDays[month]) {
        day = day % monthDays[month];
        if (month == 11) {
            month = 0;
            year++;
        }
        else month++;
    }
	
    var t = "<div id='msg'></div>\
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

function endGame() {
    document.getElementsByClassName("container")[0].innerHTML = "<h1>YOU WIN FUCKER!!!</h1>";
}