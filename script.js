"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function displayScore(score) {
  document.querySelector(".score").textContent = score;
}

document.querySelector(".check").addEventListener("click", () => {
  const guess = +document.querySelector(".guess").value;

  //When there is no input
  if (!guess) {
    displayMessage("No number!");

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("You lost the game :(");
      displayScore(0);
    }
  }
});

//Reset functionality
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".guess").value = "";

  displayMessage("Start guessing...");
  displayScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
