let playerId = 1;
let player1 = [];
let player2 = [];
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
        checkScore(playerId, player1, parseInt(field.id));
        playerId++;
    } else {
        field.innerHTML = "X";
        checkScore(playerId, player2, parseInt(field.id));
        playerId--;
    }
    // console.log(playerId);
}


function checkScore(playerId, playerScore, id) {
    playerScore.push(id);
    playerScore = playerScore.sort(function (a, b) {
        return a - b
    }).join("");
    if (playerScore.includes("456")) {
        console.log("Player " + playerId + " Won!");
    }
}

// player, id

// player += id
// if player sort contains console.log player