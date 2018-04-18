let playerId = 1;
let winCombinations = [123, 459, 789, 147, 258, 369, 159, 357];
let gameFrame = document.getElementById("gameFrame")
let gameFields = gameFrame.querySelectorAll(".gameField");

for (let i = 0; i < gameFields.length; i++) {
    gameFields[i].onclick = function () {
        placeMove(this);
    };
}

function placeMove(field) {
    if (playerId == 1) {
        field.innerHTML = "O";
        playerId++;
    } else {
        field.innerHTML = "X";
        playerId--;
    }
    console.log(playerId);
}