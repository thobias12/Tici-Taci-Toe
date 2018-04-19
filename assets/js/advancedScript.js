let playerId = 1;
let player1 = [];
let player2 = [];
let svgCross = '<svg viewBox="0 0 60 60" xml:space="preserve" id="lineSvg" xmlns="http://www.w3.org/2000/svg"><line id="line" x1="0" y1="0" x2="60" y2="60" stroke="#69F0AE" stroke-width="2" /><line id="line2" x1="0" y1="60" x2="60" y2="0" stroke="#69F0AE" stroke-width="2" /></svg>';
let svgCircle = '<svg viewBox="0 0 320 320" xml:space="preserve" id="circleSvg" xmlns="http://www.w3.org/2000/svg"><circle id="path" cx="160" cy="160" r="100" stroke="#69F0AE" fill="none" stroke-width="5" stroke-linecap="round"></circle></svg>';
let winCombinations = ["123", "456", "789", "147", "258", "369", "159", "357"];
let gameFrame = document.getElementById("gameFrame")
let gameFields = gameFrame.querySelectorAll(".gameField");

for (let i = 0; i < gameFields.length; i++) {
    gameFields[i].onclick = function () {
        placeMove(this);
    };
}

function placeMove(field) {
    if (playerId == 1 && !field.innerHTML.includes("stroke")) {
        field.innerHTML = svgCircle;
        checkScore(playerId, player1, parseInt(field.id));
        playerId++;
    } else if (playerId == 2 && !field.innerHTML.includes("stroke")) {
        field.innerHTML = svgCross;
        checkScore(playerId, player2, parseInt(field.id));
        playerId--;
    }
}

function checkScore(playerId, playerScore, id) {
    playerScore.push(id);
    playerScore = playerScore.sort(function (a, b) {
        return a - b
    }).join("");
    console.log(playerScore);
    for (let i = 0; i < winCombinations.length; i++) {
        if (playerScore.includes(winCombinations[i])) {
            console.log("Player " + playerId + " Won!");
        }
    }
}