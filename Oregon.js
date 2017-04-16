var Job;
var startingDate;
var supplies = {Oxen:0, Money: 0, Clothes: 0, Bait: 0, food: 0, Wheels: 0, Axles: 0, Tounges: 0}; 
//var choice = document.getElementsByName("occupation").value;

/*function getOccupation(){
	/*var c = <div class= 'container'
			<form>
				<input type="radio" name="occupation" value="Banker" > Banker<br>
				<input type="radio" name="occupation" value="Carpenter"> Carpenter<br>
				<input type="radio" name="occupation" value="Farmer"> Farmer<br>
				<input type="radio" name="occupation" value="Outlaw" > Outlaw<br>
				<input type="radio" name="occupation" value="Cowboy"> Cowboy<br>
				<input type="radio" name="occupation" value="Merchant"> Merchant<br>
				<input type="radio" name="occupation" value="Batman"> Batman<br>
			</form>
			<div id="info" ></div>
		></div>
	
	
}*/
function getMon(month)
{
	startingDate = month;
}
function displayOcc(occupation){
	console.log(occupation);
	if(occupation == "Banker" ){
			document.getElementById("info").innerHTML = "Banker has the most starting money in the game but you get least amount of points playing him.";
			supplies.Money = 1600;
	}
	if(occupation == "Carpenter"){
			document.getElementById("info").innerHTML = "The Carpenter starts with an average amount of money, but get more points than the banker";
			supplies.Money = 800;
	}
	if(occupation == "Farmer" ){
			document.getElementById("info").innerHTML = "You get little starting money, but 3 times as many points has the farmer";
			supplies.Money = 400;
	}
	if(occupation == "Outlaw"){
			document.getElementById("info").innerHTML = "You start with basically no money, but you can rob people. Be sure not to get arrested as there are dure consequences";
			supplies.Money = 200;
	}
	if(occupation == "Cowboy" ){
			document.getElementById("info").innerHTML = "The cowboy starts with a below average amount of money, but knows how to take care of it's cattle";
			supplies.Money = 600;
	}
	if(occupation == "Merchant"){
			document.getElementById("info").innerHTML = "The Merchant starts with a below average amount of money, but gets better deals when trading";
			supplies.Money = 600;
	}
	if(occupation == "Batman"){
			document.getElementById("info").innerHTML = "You're Batman";
			supplies.Money = 99999;
	}
	Job = occupation;
}

function getNames(){
	if(Job == "none")
		alert("Please select a Job, you bum");
	//else
		//load page
}

function generalStore(){
	if(startingDate == "none")
		alert("Please select a month");
	//else	
		//load next page
}

function clear(){
	for (var i = 0; i < 7 ; i++)
		document.getElementsByName("occupation")[i].checked = false;
	Job = "none";
	
	for (var i = 0; i < 5 ; i++)
		document.getElementsByName("Season")[i].checked = false;
	startingDate = "none";
}

