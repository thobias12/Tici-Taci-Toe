let playerId = 1;
let winCombinations = [123, 459, 789, 147, 258, 369, 159, 357];
let gameFrame = document.getElementsByClassName("gameFrame");
let gameFields = gameFrame.querySelectorAll(".gameField");


for (let i = 0; i < gameFields.length; i++) {
    gameFields[i].onClick = placeMove(this);
}

function placeMove(field) {
    console.log(field);
}