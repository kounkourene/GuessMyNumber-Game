"use strict";

const checkMe = document.querySelector(".check");
const randomNumber = Math.trunc(Math.random() * 20) + 1;
const number = (document.querySelector(".number").textContent = randomNumber);
const message = document.querySelector(".message").textContent;
let score = 20;
let highscore = 0;

checkMe.addEventListener("click", function () {
  const getNumber = Number(document.querySelector(".guess").value);
  if (!getNumber) {
    document.querySelector(".message").textContent = "No Number";
  } else if (getNumber === randomNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (getNumber > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
    }
  } else if (getNumber < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
    }
  }
});

const startAgain = document.querySelector(".again");

startAgain.addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
