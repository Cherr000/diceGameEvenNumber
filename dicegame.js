// game rule - done
// dice selection prompt - done
// dice input - done
// game play - done
// make player 2 own random box - done
// make game to work - done
// make loop for tie - done
// make prompt only work for selected number - done

"use strict"
function gameStarter() {
	gameRule();
	gamePlay();
}
function gameRule() {
	return alert ("First one to get even number win the game, if tie reply.");
}
function selectionDice() {
	var diceOption = prompt ("Selection Dice Choice. 4,6,8,10,12 or 20");
	switch(diceOption) {
		case ("4"):
		console.log(diceOption);
		return diceOption;
		case ("6"):
		console.log(diceOption);
		return diceOption;
		case ("8"):
		console.log(diceOption);
		return diceOption;
		case ("10"):
		console.log(diceOption);
		return diceOption;
		case ("12"):
		console.log(diceOption);
		return diceOption;
		case ("20"):
		console.log(diceOption);
		return diceOption;
		default:
		alert ("Not a Option Repick");
		selectionDice();
		break;
	}
	return diceOption;
}
function diceSide() {
    var min = 1;
    var max = selectionDice();
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function cpuDice() {
    var min = 1;
    var max = 10;
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function gamePlay() {
	var playerOne = diceSide();
	var playerTwo = cpuDice();
	var player = 0;
	console.log("Player 1 Roll: " + playerOne, "Player 2 Roll:" + playerTwo);
	if (playerOne %2 == 0 && playerTwo %2 != 0){
		alert ("playerOne Win");
		console.log("playerOne Win")
	}
	else if (playerTwo %2 == 0 && playerOne %2 != 0){
		alert ("playerTwo Win");
		console.log("playerTwo Win")
	}
	else if ((playerOne%2===0)&& (playerTwo%2===0)||(playerOne%1===0)&& (playerTwo%1===0)) {
		alert("Tie!");
		gamePlay()
	}
	return player;
}
var test = gameStarter();
console.log(test);