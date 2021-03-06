var minNumber = null;
var maxNumber = null;
var answer = null;
var guessCounter = null;
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
	guessCounter = 0;
	updateView();
	clear();
}

function updateView(){
	$("#minNumberLabel").removeClass()
	$("#maxNumberLabel").removeClass()
	$("#minNumberLabel").text(minNumber);
	$("#maxNumberLabel").text(maxNumber);
	if(maxNumber - minNumber < 10){
		$("#minNumberLabel").addClass("text-danger")
		$("#maxNumberLabel").addClass("text-danger")
	}else if(maxNumber - minNumber < 30){
		$("#minNumberLabel").addClass("text-warning")
		$("#maxNumberLabel").addClass("text-warning")
	}
	$("#guessCounterLabel").text(guessCounter);
}

function guess(){
	var guessNumber = parseInt($("#guessInput").val());
	if(minNumber < guessNumber && guessNumber < maxNumber){
		guessCounter ++;
		if(guessNumber > answer){
			maxNumber = guessNumber;
		}else if(guessNumber < answer){
			minNumber = guessNumber;
		}else{
			$("#guessCounterResult").text(guessCounter);
			$(".gameDiv").fadeOut(1000,function(){
				$(".congratulationDiv").fadeIn(1000)
			});
		}
		updateView();
	}
	clear();
}

function clear(){
	$("#guessInput").val("");
}

$("#startGameBtn").click(function(){
	initGame();
	$(".settingDiv").fadeOut(1000,function(){
		$(".gameDiv").fadeIn(1000)
	});
});
$("#playAgainBtn").click(function(){
	initGame();
	$(".congratulationDiv").fadeOut(1000,function(){
		$(".gameDiv").fadeIn(1000)
	});
});
$("#clearBtn").click(clear);
$("#guessBtn").click(guess);
$("#guessInput").keypress(function(e) {
    if(e.which == 13) {
        guess();
    }
});
$("#changeLevelBtn").click(function(){
	$(".congratulationDiv").fadeOut(1000,function(){
		$(".settingDiv").fadeIn(1000)
	});
})