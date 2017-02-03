// game rule - done
// dice selection prompt - done
// dice input - done
// game play - done
// make player 2 own random box - done
// make game to work - done
// make prompt only work for selected number
// make loop for tie

"use strict"
function gameStarter() {
	gameRule();
	gamePlay();
}
function gameRule() {
	return alert ("First one to get even number win the game, if tie reply.");
}
function selectionDice() {
	var dicePicker = prompt ("Selection Dice Choice. 4,6,8,10,12 or 20");
	console.log("Dice Choice: " + dicePicker);
	return dicePicker;
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
	if (playerOne %2 == 0 && playerTwo %2 != 0){
		alert ("playerOne Win");
	}
	else if (playerTwo %2 == 0 && playerOne %2 != 0){
		alert ("playerTwo Win");
	}
	else if ((playerOne%2===0)&& (playerTwo%2===0)||(playerOne%1===0)&& (playerTwo%1===0)) {
		alert("Tie!");
	}
	console.log("Player 1 Roll: " + playerOne, "Player 2 Roll:" + playerTwo);
	return player;
}
var test = gameStarter();
console.log(test);