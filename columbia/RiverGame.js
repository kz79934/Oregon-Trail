var y = 3;//player y position
var px = 25;// player x position
var dodge = 0;//counts how many rocks have been dodge, game ends after a certain number
var r1x = 4;// rock 1 starting x position
var r2x = 4;// rock 2 starting x position
var r3x = 4;// rock 3 starting x position
var r2start = false;//indicates if rock two is in play
var r3start = false;//indicates if rock three is in play
var colom = false;// used of river animation
var fin = false;//indicates it game is over
var pos = [0,45,15,60,30,75];//possible rock positions
var riverHP = 12;
var hit = new Audio("columbia/hit.WAV");//damage sound fx
var river = new Audio("columbia/river.mp3");//background music

function columRiver(){
document.getElementsByClassName("container")[0].innerHTML = "<img src='columbia/columbia.JPG' id = 'col' alt='Mountain View' style='width:98%; height:97%;position: absolute;background-color: black;'>\
														<img src='columbia/player.png' id='ok' style = 'position:absolute; width: 180px; length: 300px; top:3%; left: 25%;' alt='Mountain View'>\
														<img src='columbia/rock1.png' id='r1' style = 'position:absolute; width: 100px; length: 100px; top:0px; right: 4%;' alt='Mountain View'>\
														<img src='columbia/rock2.png' id='r2' style = 'position:absolute; width: 100px; length: 100px; top:0px; right: 4%; opacity: 0;' alt='Mountain View'>\
														<img src='columbia/rock3.png' id='r3' style = 'position:absolute; width: 80px; length: 80px; top:0px; right: 4%; opacity: 0;' alt='Mountain View'>"	
$(document).ready(function(){
	river.loop = true;
	river.play();
	rock1();
	$(window).keydown(function (e) {
        if (e.which == 40 && fin == false) {//down
			if(y <= 75){
				$("#ok").stop();
				y += .3;
				$("#ok").animate({top: y+'%'},100);
			}
        }	
    });
	$(window).keydown(function (e) {
        if (e.which == 38 && fin == false){//up
			if(y >= 3){
				$("#ok").stop();
				y -= .3;
				$("#ok").animate({top: y+'%'},100);
			}
        }	
    });
	
	//
	$(window).keydown(function (e) {
        if (e.which == 39 && fin == false) {//right
			if(px <= 80){
				$("#ok").stop();
				px += .5;
				$("#ok").animate({left: px+'%'},100);
			}
        }	
    });
	$(window).keydown(function (e) {
        if (e.which == 37 && fin == false){//left
			if(px >= 0){
				$("#ok").stop();
				px -= .1;
				$("#ok").animate({left: px+'%'},100);
			}
        }	
    });
	
	
	
});
}
//checks if rock1 hit you
function check1(){
	
	
	var rocktop = $("#r1").css("top");
	var rafttop = $("#ok").css("top");
	rocktop = Number(rocktop.slice(0,rocktop.length-2));
	rafttop = Number(rafttop.slice(0,rafttop.length-2));
	var rockleft = $("#r1").position().left;
	var raftleft = $("#ok").position().left;
	var smashx1 = false;
	var smashy1 = false;
	var displaceY = rocktop - rafttop;
	if((displaceY < 90 )&& (displaceY > -70))
		smashy1 = true;
	if((rockleft < raftleft + 200 )&& (rockleft > raftleft - 100))
		smashx1 = true;
	if(smashy1 == true && smashx1 == true){
		$("#ok").animate({opacity: '.5'},100,function(){$("#ok").animate({opacity: '1'},100);});
		hit.play();
		riverHP--;
		if(riverHP == 0)
			alert("dead");//replace with end game
		
	}
}
//checks if rock2 hit you
function check2(){	
	var rocktop2 = $("#r2").css("top");
	var rafttop = $("#ok").css("top");
	rocktop2 = Number(rocktop2.slice(0,rocktop2.length-2));
	rafttop = Number(rafttop.slice(0,rafttop.length-2));
	var rockleft2 = $("#r2").position().left;
	var raftleft = $("#ok").position().left;
	var smashx2 = false;
	var smashy2 = false;
	var displaceY2 = rocktop2 - rafttop;
	if(r2start == true){
		if((displaceY2 < 90 )&& (displaceY2 > -70))
			smashy2 = true;
		if((rockleft2 < raftleft + 200 )&& (rockleft2 > raftleft - 100))
			smashx2 = true;
		if(smashy2 == true && smashx2 == true){
			$("#ok").animate({opacity: '.5'},100,function(){$("#ok").animate({opacity: '1'},100);});
			hit.play();
			riverHP--;
			if(riverHP == 0){
				river.pause();
				riverFail();
			}
		}
	}
}
//checks if rock3 hit you
function check3(){
	var rocktop3 = $("#r3").css("top");
	var rafttop = $("#ok").css("top");
	rocktop3 = Number(rocktop3.slice(0,rocktop3.length-2));
	rafttop = Number(rafttop.slice(0,rafttop.length-2));
	var rockleft3 = $("#r3").position().left;
	var raftleft = $("#ok").position().left;
	var smashx3 = false;
	var smashy3 = false;
	var displaceY3 = rocktop3 - rafttop;
	
	if(r3start == true){
		
		if((displaceY3 < 90 )&& (displaceY3 > -70))
			smashy3 = true;
		if((rockleft3 < raftleft + 200 )&& (rockleft3 > raftleft - 100))
			smashx3 = true;
		if(smashy3 == true && smashx3 == true){
			$("#ok").animate({opacity: '.5'},100,function(){$("#ok").animate({opacity: '1'},100);});
			hit.play();
			riverHP--;
			if(riverHP == 0)
				alert("dead");//replace with endgame();
		}
	}
}
//moves rock1
function rock1(){
	r1x+= 4;
	if(colom == false){
		$("#col").attr("src", "columbia/columbia.JPG");
		colom = true;
	}
	else{
		$("#col").attr("src", "columbia/columbia2.JPG");
		colom = false;
	}
	$("#r1").animate({right: r1x + '%'},"fast",function(){
		if(r1x != 120){
			if(r1x == 92)
				$("#r1").css("opacity", "0");
			check1();
			//console.log($("#ok").css("opacity"));
			if($("#ok").css("opacity") != 1)
				$("#ok").css("opacity", "1");
			rock1();
		}
		else{
			dodge++;
			if(r2start == false && dodge > 1){
				r2start = true;
				$("#r2").css("top", pos[2]+"%");
				$("#r2").css("opacity", "1");
				rock2();
			}
			var rando = Math.floor(Math.random()*2);
			$("#r1").css("right", "4%");
			$("#r1").css("top", pos[rando]+"%");
			$("#r1").css("opacity", "1");
			r1x = 4;
			if(dodge < 20)
				rock1();
			else	
				$("#r1").css("opacity", "0");
		}
	});
}
//moves rock2
function rock2(){
	r2x += 4;
	$("#r2").animate({right: r2x + '%'},"fast",function(){
		if(r2x != 120){
			if(r2x == 92)
				$("#r2").css("opacity", "0");
			check2();
			rock2();
		}
		else{
			dodge++;
			if(r3start == false && dodge > 3){
				r3start = true;
				$("#r3").css("top", pos[4]+"%");
				$("#r3").css("opacity", "1");
				rock3();
			}
			var rando2 = Math.floor(Math.random()*2);
			$("#r2").css("right", "4%");
			$("#r2").css("top", pos[rando2+2]+"%");
			$("#r2").css("opacity", "1");
			r2x = 4;
			if(dodge < 20)
				rock2();
			else	
				$("#r2").css("opacity", "0");
		}
	});
}
//moves rock 3
function rock3(){
	r3x += 4;
	$("#r3").animate({right: r3x + '%'},"fast",function(){
		if(r3x != 120){
			if(r3x == 92)
				$("#r3").css("opacity", "0");
			check3();
			rock3();
		}
		else{
			dodge++;
			var rando3 = Math.floor(Math.random()*2);
			$("#r3").css("right", "4%");
			$("#r3").css("top", pos[rando3+4]+"%");
			$("#r3").css("opacity", "1");
			r3x = 4;
			if(dodge < 19)
				rock3();
			else{
				$("#r3").css("opacity", "0");
				fin = true;
				alert("River Successfully Sailed \n HP:" + riverHP);//remove the hp part and display how did and did't die
				finish();
			}
		}
	});
}
//ends game
function finish(){
	px+= 4;
	if(colom == false){
		$("#col").attr("src", "columbia/columbia.JPG");
		colom = true;
	}
	else{
		$("#col").attr("src", "columbia/columbia2.JPG");
		colom = false;
	}
	$("#ok").animate({left: px + '%'},function(){
		if(px < 80){
			finish();
		}
		else{
			river.pause();
			$("#ok").css("opacity", "0");
			riverWin();
		}
	});
}

function riverFail(){
	document.getElementsByClassName("container")[0].innerHTML = "<p>Your wagon got completely destoryed while floating down the Columbia River!<br> Everyone died and all supplies were lost!</p>" + spaceTxt;
	$(document).keypress(function (e) {
        if (e.keyCode == SPACEBAR) {
            $(this).unbind();
            lostGame();
        }
    });
}

function riverWin(){
	currLocation = "Willamette Valley";
	document.getElementsByClassName("container")[0].innerHTML = "<h2>Congratulations!</h2><p>You successfully made it across the Columbia River!</p>" + spaceTxt;
	$(document).keypress(function (e) {
        if (e.keyCode == SPACEBAR) {
            $(this).unbind();
            displayLocation();
        }
    });
}

	

