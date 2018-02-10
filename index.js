// Meta information for game
// if personTurn is false, Player 1 is playing. Else player 2.
var personTurn = false;
var turnNumber = 0;
var gameWon = false;

// Pressed status for each square

var sq1PressedStatus = 0;
var sq2PressedStatus = 0;
var sq3PressedStatus = 0;
var sq4PressedStatus = 0;
var sq5PressedStatus = 0;
var sq6PressedStatus = 0;
var sq7PressedStatus = 0;
var sq8PressedStatus = 0;
var sq9PressedStatus = 0;

var sq1 = document.getElementById("sq1");
var sq2 = document.getElementById("sq2");
var sq3 = document.getElementById("sq3");
var sq4 = document.getElementById("sq4");
var sq5 = document.getElementById("sq5");
var sq6 = document.getElementById("sq6");
var sq7 = document.getElementById("sq7");
var sq8 = document.getElementById("sq8");
var sq9 = document.getElementById("sq9");

sq1.addEventListener("click", function(){
	if (sq1PressedStatus === 0){sq1PressedStatus = onClick(sq1);
	}
	winTest();
	clearResults();
});
sq2.addEventListener("click", function(){
	if (sq2PressedStatus === 0){sq2PressedStatus = onClick(sq2);
	}
	winTest();
	clearResults();
});
sq3.addEventListener("click", function(){
	if (sq3PressedStatus === 0){sq3PressedStatus = onClick(sq3);
	}
	winTest();
	clearResults();
});
sq4.addEventListener("click", function(){
	if (sq4PressedStatus === 0){sq4PressedStatus = onClick(sq4);
	}
	winTest();
	clearResults();
});
sq5.addEventListener("click", function(){
	if (sq5PressedStatus === 0){sq5PressedStatus = onClick(sq5);
	}
	winTest();
	clearResults();
});
sq6.addEventListener("click", function(){
	if (sq6PressedStatus === 0){sq6PressedStatus = onClick(sq6);
	}
	winTest();
	clearResults();
});
sq7.addEventListener("click", function(){
	if (sq7PressedStatus === 0){sq7PressedStatus = onClick(sq7);
	}
	winTest();
	clearResults();
});
sq8.addEventListener("click", function(){
	if (sq8PressedStatus === 0){sq8PressedStatus = onClick(sq8);
	}
	winTest();
	clearResults();
});
sq9.addEventListener("click", function(){
	if (sq9PressedStatus === 0){sq9PressedStatus = onClick(sq9);
	}
	winTest();
	clearResults();
});

document.querySelector("#reset").addEventListener("click", function() {
	document.getElementById("results").textContent = "";
	gameWon = false;
	if (personTurn === false) {
		personTurn = true;
	} else if (personTurn === true){
		personTurn = false;
	} else {
		if (Math.random() < 0.5){
			personTurn = false;
			document.getElementById("results").textContent = "Player 1 has been randomly chosen to start!";
		} else {
			personTurn = true;
			document.getElementById("results").textContent = "Player 2 has been randomly chosen to start!";
		};
	}
	turnNumber = 0;
	sq1PressedStatus = 0;
	sq2PressedStatus = 0;
	sq3PressedStatus = 0;
	sq4PressedStatus = 0;
	sq5PressedStatus = 0;
	sq6PressedStatus = 0;
	sq7PressedStatus = 0;
	sq8PressedStatus = 0;
	sq9PressedStatus = 0;
	sq1.classList.remove("playerOnePressed");
	sq1.classList.remove("playerTwoPressed");
	sq2.classList.remove("playerOnePressed");
	sq2.classList.remove("playerTwoPressed");
	sq3.classList.remove("playerOnePressed");
	sq3.classList.remove("playerTwoPressed");
	sq4.classList.remove("playerOnePressed");
	sq4.classList.remove("playerTwoPressed");
	sq5.classList.remove("playerOnePressed");
	sq5.classList.remove("playerTwoPressed");
	sq6.classList.remove("playerOnePressed");
	sq6.classList.remove("playerTwoPressed");
	sq7.classList.remove("playerOnePressed");
	sq7.classList.remove("playerTwoPressed");
	sq8.classList.remove("playerOnePressed");
	sq8.classList.remove("playerTwoPressed");
	sq9.classList.remove("playerOnePressed");
	sq9.classList.remove("playerTwoPressed");
});

function onClick(a){
	if (gameWon === false){
		turnNumber += 1;
		if (personTurn === true){
			a.className += " playerOnePressed";
		} else {
			a.className += " playerTwoPressed";
		}
		if (personTurn === true){
			personTurn=false;
		} else {
			personTurn=true;
		}
		if (personTurn === true){
			return 1;
		} else {
			return 2;
		}
	};
};

// Test to see if any combination of squares leads to a win

function winTest(){
	if (sq1PressedStatus === 1 && sq2PressedStatus === 1 && sq3PressedStatus === 1){
		playerWon(1);
		gameWon = true;
	} else if (sq1PressedStatus === 2 && sq2PressedStatus === 2 && sq3PressedStatus === 2){
		playerWon(2)
		gameWon = true;
	} else if (sq4PressedStatus === 1 && sq5PressedStatus === 1 && sq6PressedStatus === 1){
		playerWon(1);
		gameWon = true;
	} else if (sq4PressedStatus === 2 && sq5PressedStatus === 2 && sq6PressedStatus === 2){
		playerWon(2);
		gameWon = true;
	} else if (sq7PressedStatus === 1 && sq8PressedStatus === 1 && sq9PressedStatus === 1){
		playerWon(1);
		gameWon = true;
	} else if (sq7PressedStatus === 2 && sq8PressedStatus === 2 && sq9PressedStatus === 2){
		playerWon(2);
		gameWon = true;
	} else if (sq1PressedStatus === 1 && sq4PressedStatus === 1 && sq7PressedStatus === 1){
		playerWon(1);
		gameWon = true;
	} else if (sq1PressedStatus === 2 && sq4PressedStatus === 2 && sq7PressedStatus === 2){
		playerWon(2);
		gameWon = true;
	} else if (sq2PressedStatus === 1 && sq5PressedStatus === 1 && sq8PressedStatus === 1){
		playerWon(1);
		gameWon = true;
	} else if (sq2PressedStatus === 2 && sq5PressedStatus === 2 && sq8PressedStatus === 2){
		playerWon(2);
		gameWon = true;
	} else if (sq3PressedStatus === 1 && sq6PressedStatus === 1 && sq9PressedStatus === 1){
		playerWon(1);
		gameWon = true;
	} else if (sq3PressedStatus === 2 && sq6PressedStatus === 2 && sq9PressedStatus === 2){
		playerWon(2);
		gameWon = true;
	} else if (sq1PressedStatus === 1 && sq5PressedStatus === 1 && sq9PressedStatus === 1){
		playerWon(1);
		gameWon = true;
	} else if (sq1PressedStatus === 2 && sq5PressedStatus === 2 && sq9PressedStatus === 2){
		playerWon(2);
		gameWon = true;
	} else if (sq3PressedStatus === 1 && sq5PressedStatus === 1 && sq7PressedStatus === 1){
		playerWon(1);
		gameWon = true;
	} else if (sq3PressedStatus === 2 && sq5PressedStatus === 2 && sq7PressedStatus === 2){
		playerWon(2);
		gameWon = true;
	} else if (turnNumber === 9){
		document.getElementById("results").textContent = "Draw!";
		personTurn = 0;
	};
}

function clearResults() {
	if (gameWon === false && turnNumber < 9){
		document.getElementById("results").textContent = "";
	};
}

function playerWon(i){
	document.getElementById("results").textContent = "Player " + i + " won!";
}