"use strict";

let turtle = document.getElementById("turtle");
let scoreText = document.getElementById("scoreText");
let tpsText = document.getElementById("tpsText");
let turtlesPerClick = 1;
let turtlesPerSecond = 0;
let score = 0;
let clickPowerText = document.getElementById("clickPowerText");

/* Saving the game */
function saveGame() {
  localStorage.setItem("score", score);
  localStorage.setItem("turtlesPerClick", turtlesPerClick);
  localStorage.setItem("turtlesPerSecond", turtlesPerSecond);
}

/* Loading the game */
function loadGame() {
  let savedScore = localStorage.getItem("score");
  let savedTurtlesPerClick = localStorage.getItem("turtlesPerClick");
  let savedTurtlesPerSecond = localStorage.getItem("turtlesPerSecond");
  if (savedScore !== null) {
    score = Number(savedScore);
  }

  if (savedTurtlesPerClick !== null) {
    turtlesPerClick = Number(savedTurtlesPerClick);
  }

  if (savedTurtlesPerSecond !== null) {
    turtlesPerSecond = Number(savedTurtlesPerSecond);
  }

  updateFunction();
}

setInterval(saveGame, 5000);
loadGame();

/* Update Function */
function updateFunction() {
  scoreText.textContent = score;
  tpsText.textContent = turtlesPerSecond;
  clickPowerText.textContent = turtlesPerClick;
}

/* Turtles per second being added */
setInterval(function () {
  score += turtlesPerSecond;
  updateFunction();
  saveGame();
}, 1000);

/* Turtle click */
turtle.addEventListener("click", function () {
  score += turtlesPerClick;
  updateFunction();
  saveGame();
});

/* Clear all data button */
document.getElementById("clearAllData").addEventListener("click", function () {
  turtlesPerClick = 1;
  turtlesPerSecond = 0;
  score = 0;
  localStorage.removeItem("score");
  localStorage.removeItem("turtlesPerClick");
  localStorage.removeItem("turtlesPerSecond");
  updateFunction();
});

/* Autoclicker Upgrade */
document.getElementById("buy1").addEventListener("click", function () {
  if (score >= 100) {
    turtlesPerSecond++;
    score -= 100;
    updateFunction();
    saveGame();
  }
});

/* Turtle Hand Upgrade */
document.getElementById("buy2").addEventListener("click", function () {
  if (score >= 150) {
    turtlesPerClick++;
    score -= 150;
    updateFunction();
    saveGame();
  }
});

/* Turtle Farm Upgrade */
document.getElementById("buy3").addEventListener("click", function () {
  if (score >= 1000) {
    turtlesPerSecond += 14;
    score -= 1000;
    updateFunction();
    saveGame();
  }
});

/* Turtle Glove Upgrade */
document.getElementById("buy4").addEventListener("click", function () {
  if (score >= 1250) {
    turtlesPerClick += 10;
    score -= 1250;
    updateFunction();
    saveGame();
  }
});
/* Turtle Factory Upgrade */
document.getElementById("buy5").addEventListener("click", function () {
  if (score >= 10000) {
    turtlesPerSecond += 160;
    score -= 10000;
    updateFunction();
    saveGame();
  }
});

/* Rich Hand Upgrade */
document.getElementById("buy6").addEventListener("click", function () {
  if (score >= 13000) {
    turtlesPerClick += 14;
    score -= 13000;
    updateFunction();
    saveGame();
  }
});
