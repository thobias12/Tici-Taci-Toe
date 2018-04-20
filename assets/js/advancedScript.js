let playerId = 1;
let player1 = [];
let player2 = [];
let moves = 0;

let svgCross = '<svg viewBox="0 0 60 60" xml:space="preserve" id="lineSvg" xmlns="http://www.w3.org/2000/svg"><line class="svgInput" id="line" x1="0" y1="0" x2="60" y2="60" stroke="#69F0AE" stroke-width="2" /><line class="svgInput" id="line2" x1="0" y1="60" x2="60" y2="0" stroke="#69F0AE" stroke-width="2" /></svg>';
let svgCircle = '<svg viewBox="0 0 320 320" xml:space="preserve" id="circleSvg" xmlns="http://www.w3.org/2000/svg"><circle class="svgInput" id="path" cx="160" cy="160" r="100" stroke="#69F0AE" fill="none" stroke-width="5" stroke-linecap="round"></circle></svg>';
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
	moves++;
	playerScore.push(id);

	for (let x = 0; x < winCombinations.length; x++) { // For every combination
		let match = 0;
		for (let i = 0; i < playerScore.length; i++) { // Check current playerScore against current combination index
			if (winCombinations[x].toString().includes(playerScore[i])) { // Convert to string, compare if playerscore index exists in combination index
				match++;
				console.log(match);
				if (match == 3) {
					if (playerId > 1) {
						document.getElementById("player2Score").innerHTML = +1;
						moves = 0;
						document.getElementById("winner").innerHTML = ("Player " + playerId + " Won");
						setTimeout(clearBoard, 3000);
					} else {
						document.getElementById("player1Score").innerHTML = +1;
						moves = 0;
						document.getElementById("winner").innerHTML = ("Player " + playerId + " Won");
						setTimeout(clearBoard, 3000);
					}
				}
			}
		}
	}
	if (moves == 9) {
		document.getElementById("tiesScore").innerHTML = +1;
		document.getElementById("winner").innerHTML = ("Game was tie");
		setTimeout(clearBoard, 3000);
	}
}

function clearBoard() {
	var elements = document.getElementsByClassName("svgInput");
	playerId = 1;
	player1 = [];
	player2 = [];
	moves = 0;
	while (elements.length > 0) {
		elements[0].parentNode.removeChild(elements[0]);
	}
}