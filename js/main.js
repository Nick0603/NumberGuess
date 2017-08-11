var minNumber = null;
var maxNumber = null;
var answer = null;

function getRandom(min , max){
	return Math.floor(Math.random()* (max-min+1))+min;
}

function initGame(){
	var level = $(":checked").val();
	if( level == "easy"){
		minNumber = 0;
		maxNumber = 100;
	}else if( level == "normal"){
		minNumber = 0;
		maxNumber = 500;
	}else{
		minNumber = 0;
		maxNumber = 1000;
	}
	answer = getRandom( minNumber+1 , maxNumber-1 );
	updateView();
}

function updateView(){
	$("#minNumberLabel").text(minNumber);
	$("#maxNumberLabel").text(maxNumber);
}

function guess(){
	var guessNumber = $("#guessInput").val();
	if(guessNumber > answer){
		maxNumber = guessNumber;
	}else if(guessNumber < answer){
		minNumber = guessNumber;
	}else{
		alert("勝利")
	}
	updateView();
	clear();
}

function clear(){
	$("#guessInput").val("");
}

$("#startGameBtn").click(initGame);
$("#clearBtn").click(clear);
$("#guessBtn").click(guess);
