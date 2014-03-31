$(function() {

var userInput;
var userGuesses = [];
var winningNumber = Math.floor((Math.random()*100)+1);

console.log(winningNumber);


function checkInput(number){
    if ( !(isNaN(number)) && (number >= 0 && number <=100)){
        return number;
    } else {
        return alert("Please only use whole numbers between 1-100");
    }     
}


$('#submit').on('click', function(){
	userInput = checkInput(parseInt($("#input1").val(), 10));
		if (userInput === winningNumber) {
			$('#status').html("You're a Winner!");
			$('#status').css('color', '#f62817');
			} 
		else if (((userInput) - winningNumber) <= 10 && ((userInput) - winningNumber) > 0) {
			$('#status').html("Hot! Guess lower.");
		}
		else if ((userInput - winningNumber) >= -(10) && (userInput - winningNumber) < 0) {
			$('#status').html("Hot! Guess higher.");
		}
		else if ((userInput - winningNumber) > 10 && (userInput - winningNumber) < 20) {
			$('#status').html("You're room-temperature, guess lower.");
			}
		else if ((userInput - winningNumber) < -(10) && (userInput - winningNumber) > -(20)) {
			$('#status').html("You're room-temperature, guess higher.");
			}
		else if ((userInput - winningNumber) < -(20)) {
			$('#status').html("You're as cold-as-ice! You're willing to sacrifice our love, but guess HIGHER");
		}
		else {
			$('#status').html("You're as cold-as-ice! You're willing to sacrifice our love, but guess LOWER");
		}
});

$('#restart').on('click', function(){
	document.location.href = " ";
})

$('#hint').on('click', function() {
	alert("The answer is " + winningNumber)
})
	
});
	//$('#status').html('Hello World');


/*



	debugger;
	userInput = parseInt($("#input1").val(), 10);
	check();


	for(var i =0; i < userGuesses.length; i++){
	if (userGuesses[i] === undefined){
		userGuesses.push(userInput);
	}
		else if(userGuesses[i] === userInput){
			// tell them they guessed it.
		} else {
			userGuesses.push(userInput);

		}
	}
});

function check(){
	if(userInput === winningNumber){
		console.log("winner");
	} else {
		console.log('loser');
	}
}

[55,22]

*/





