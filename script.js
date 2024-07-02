"use strict";
const checkBtn = document.querySelector(".check");
let guessNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

checkBtn.addEventListener("click", function () {
  const grabValue = Number(document.querySelector(".guess").value);
  if (!grabValue) {
    document.querySelector(".message").textContent = "No Number";
  } else if (grabValue > guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (grabValue < guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (grabValue === guessNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = guessNumber; //
  }
});

const resetGame = document.querySelector(".again");

resetGame.addEventListener("click", function () {
  score = 20;
  let guessNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
