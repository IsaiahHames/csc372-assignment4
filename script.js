//Javascript file for Rock Paper Scissors Game
// Author: Isaiah Hames
// Date: 03.3.2026
// Description: This file contains the JavaScript code for my Rock Paper Scissors game.
// It allows the player to select their choice, generates a random choice for the CPU, and determines the winner. 
// The game also keeps track of the score and allows the player to reset the game and score.


const plyThrowArr = document.querySelectorAll(".ply-btn");

for (let index = 0; index < plyThrowArr.length; index++) {
    const element = plyThrowArr[index];
    element.addEventListener('click', playGame);
}

let active = 0;
const cpuThrow = document.getElementById("cpu-choice");

function playGame() {
    if (active == 0) {
        active = 1;
        this.style.border = "2px solid red";
        let plyChoice = this.children[0];

        var cpuTimer = setInterval(cpuChoice, 500);

        var cpuStop = setTimeout(function () {
            const randomIndex = Math.floor(Math.random() * cpuThrowArr.length);
            cpuThrow.src = "images/" + cpuThrowArr[randomIndex] + ".PNG";
            clearInterval(cpuTimer);
            cpuThrow.style.border = "2px solid blue";
            checkWinner(plyChoice);
        }, 3000);
    }

}

const cpuThrowArr = ["rock", "paper", "scissors"];
let index = 0;
function cpuChoice() {
    cpuThrow.src = "images/" + cpuThrowArr[index] + ".png";
    index++;
    if (index >= cpuThrowArr.length) {
        index = 0;
    }

}

function checkWinner(plyChoice) {
    let plyScore = document.getElementById("score-text").textContent.split("|")[0].split(":")[1].trim();
    let cpuScore = document.getElementById("score-text").textContent.split("|")[1].split(":")[1].trim();

    if (plyChoice.src === cpuThrow.src) {
        document.getElementById("result-text").textContent = "Result: Tie!";
    } else if ((plyChoice.src.includes("rock") && cpuThrow.src.includes("scissors")) ||
        (plyChoice.src.includes("paper") && cpuThrow.src.includes("rock")) ||
        (plyChoice.src.includes("scissors") && cpuThrow.src.includes("paper"))) {
        plyScore = parseInt(plyScore) + 1;
        document.getElementById("result-text").textContent = "Result: You Win!";
    } else {
        cpuScore = parseInt(cpuScore) + 1;
        document.getElementById("result-text").textContent = "Result: You Lose!";
    }

    document.getElementById("score-text").textContent = "You: " + plyScore + " | CPU: " + cpuScore;
}


const resetBTN = document.querySelector("#reset-btn");
resetBTN.addEventListener('click', resetGame);

function resetGame() {
    active = 0;
    cpuThrow.src = "images/question-mark.png";
    document.getElementById("result-text").textContent = "Result:";
    cpuThrow.style.border = "2px solid black";

    for (let index = 0; index < plyThrowArr.length; index++) {
        const element = plyThrowArr[index];
        element.style.border = "2px solid black";
    }
}

const resetScoreBTN = document.querySelector("#reset-score");
resetScoreBTN.addEventListener('click', function() {
    document.getElementById("score-text").textContent = "You: 0 | CPU: 0";
});