"use strict";

let turtle = document.getElementById("turtle");
let scoreText = document.getElementById("scoreText");
let tpsText = document.getElementById("tpsText");
let turtlesPerClick = 1;
let turtlesPerSecond = 0;
let score = 0;
let clickPowerText = document.getElementById("clickPowerText");
let upgrade1TimesBought = 0;
let upgrade2TimesBought = 0;
let upgrade3TimesBought = 0;
let upgrade4TimesBought = 0;
let upgrade5TimesBought = 0;
let upgrade6TimesBought = 0;
let upgrade7TimesBought = 0;
let upgrade8TimesBought = 0;
let upgrade9TimesBought = 0;
let upgrade10TimesBought = 0;

/* Saving the game */
function saveGame() {
  localStorage.setItem("score", score);
  localStorage.setItem("turtlesPerClick", turtlesPerClick);
  localStorage.setItem("turtlesPerSecond", turtlesPerSecond);
  localStorage.setItem("upgrade1TimesBought", upgrade1TimesBought);
  localStorage.setItem("upgrade2TimesBought", upgrade2TimesBought);
  localStorage.setItem("upgrade3TimesBought", upgrade3TimesBought);
  localStorage.setItem("upgrade4TimesBought", upgrade4TimesBought);
  localStorage.setItem("upgrade5TimesBought", upgrade5TimesBought);
  localStorage.setItem("upgrade6TimesBought", upgrade6TimesBought);
  localStorage.setItem("upgrade7TimesBought", upgrade7TimesBought);
  localStorage.setItem("upgrade8TimesBought", upgrade8TimesBought);
  localStorage.setItem("upgrade9TimesBought", upgrade9TimesBought);
  localStorage.setItem("upgrade10TimesBought", upgrade10TimesBought);
}

/* Loading the game */
function loadGame() {
  let savedScore = localStorage.getItem("score");
  let savedTurtlesPerClick = localStorage.getItem("turtlesPerClick");
  let savedTurtlesPerSecond = localStorage.getItem("turtlesPerSecond");
  let savedUpgrade1TimesBought = localStorage.getItem("upgrade1TimesBought");
  let savedUpgrade2TimesBought = localStorage.getItem("upgrade2TimesBought");
  let savedUpgrade3TimesBought = localStorage.getItem("upgrade3TimesBought");
  let savedUpgrade4TimesBought = localStorage.getItem("upgrade4TimesBought");
  let savedUpgrade5TimesBought = localStorage.getItem("upgrade5TimesBought");
  let savedUpgrade6TimesBought = localStorage.getItem("upgrade6TimesBought");
  let savedUpgrade7TimesBought = localStorage.getItem("upgrade7TimesBought");
  let savedUpgrade8TimesBought = localStorage.getItem("upgrade8TimesBought");
  let savedUpgrade9TimesBought = localStorage.getItem("upgrade9TimesBought");
  let savedUpgrade10TimesBought = localStorage.getItem("upgrade10TimesBought");

  if (savedScore !== null) {
    score = Number(savedScore);
  }

  if (savedTurtlesPerClick !== null) {
    turtlesPerClick = Number(savedTurtlesPerClick);
  }

  if (savedTurtlesPerSecond !== null) {
    turtlesPerSecond = Number(savedTurtlesPerSecond);
  }

  if (savedUpgrade1TimesBought !== null) {
    upgrade1TimesBought = Number(savedUpgrade1TimesBought);
  }

  if (savedUpgrade2TimesBought !== null) {
    upgrade2TimesBought = Number(savedUpgrade2TimesBought);
  }

  if (savedUpgrade3TimesBought !== null) {
    upgrade3TimesBought = Number(savedUpgrade3TimesBought);
  }

  if (savedUpgrade4TimesBought !== null) {
    upgrade4TimesBought = Number(savedUpgrade4TimesBought);
  }

  if (savedUpgrade5TimesBought !== null) {
    upgrade5TimesBought = Number(savedUpgrade5TimesBought);
  }

  if (savedUpgrade6TimesBought !== null) {
    upgrade6TimesBought = Number(savedUpgrade6TimesBought);
  }

  if (savedUpgrade7TimesBought !== null) {
    upgrade7TimesBought = Number(savedUpgrade7TimesBought);
  }

  if (savedUpgrade8TimesBought !== null) {
    upgrade8TimesBought = Number(savedUpgrade8TimesBought);
  }

  if (savedUpgrade9TimesBought !== null) {
    upgrade9TimesBought = Number(savedUpgrade9TimesBought);
  }

  if (savedUpgrade10TimesBought !== null) {
    upgrade10TimesBought = Number(savedUpgrade10TimesBought);
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
  document.getElementById("upgrade1Cost").textContent =
    "Cost: " + getUpgradeCost(100, 1.2, upgrade1TimesBought);

  document.getElementById("upgrade2Cost").textContent =
    "Cost: " + getUpgradeCost(150, 1.2, upgrade2TimesBought);

  document.getElementById("upgrade3Cost").textContent =
    "Cost: " + getUpgradeCost(1000, 1.2, upgrade3TimesBought);

  document.getElementById("upgrade4Cost").textContent =
    "Cost: " + getUpgradeCost(1250, 1.2, upgrade4TimesBought);

  document.getElementById("upgrade5Cost").textContent =
    "Cost: " + getUpgradeCost(13000, 1.2, upgrade5TimesBought);

  document.getElementById("upgrade6Cost").textContent =
    "Cost: " + getUpgradeCost(20000, 1.2, upgrade6TimesBought);

  document.getElementById("upgrade7Cost").textContent =
    "Cost: " + getUpgradeCost(40000, 1.2, upgrade7TimesBought);
}

/* Scalling Function */

function getUpgradeCost(baseCost, multiplier, timesBought) {
  return Math.floor(baseCost * multiplier ** timesBought);
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
  upgrade1TimesBought = 0;
  upgrade2TimesBought = 0;
  upgrade3TimesBought = 0;
  upgrade4TimesBought = 0;
  upgrade5TimesBought = 0;
  upgrade6TimesBought = 0;
  upgrade7TimesBought = 0;
  upgrade8TimesBought = 0;
  upgrade9TimesBought = 0;
  upgrade10TimesBought = 0;
  saveGame();
  updateFunction();
  localStorage.clear();
});

/* Autoclicker Upgrade */
document.getElementById("buy1").addEventListener("click", function () {
  if (score >= getUpgradeCost(100, 1.2, upgrade1TimesBought)) {
    turtlesPerSecond++;
    score -= getUpgradeCost(100, 1.2, upgrade1TimesBought);
    upgrade1TimesBought++;
    updateFunction();
    saveGame();
  }
});

/* Turtle Hand Upgrade */
document.getElementById("buy2").addEventListener("click", function () {
  if (score >= getUpgradeCost(150, 1.2, upgrade2TimesBought)) {
    turtlesPerClick++;
    score -= getUpgradeCost(150, 1.2, upgrade2TimesBought);
    upgrade2TimesBought++;
    updateFunction();
    saveGame();
  }
});

/* Turtle Farm Upgrade */
document.getElementById("buy3").addEventListener("click", function () {
  if (score >= getUpgradeCost(1000, 1.2, upgrade3TimesBought)) {
    turtlesPerSecond += 12;
    score -= getUpgradeCost(1000, 1.2, upgrade3TimesBought);
    upgrade3TimesBought++;
    updateFunction();
    saveGame();
  }
});

/* Turtle Glove Upgrade */
document.getElementById("buy4").addEventListener("click", function () {
  if (score >= getUpgradeCost(1250, 1.2, upgrade4TimesBought)) {
    turtlesPerClick += 6;
    score -= getUpgradeCost(1250, 1.2, upgrade4TimesBought);
    upgrade4TimesBought++;
    updateFunction();
    saveGame();
  }
});

/* Turtle Factory Upgrade */
document.getElementById("buy5").addEventListener("click", function () {
  if (score >= getUpgradeCost(13000, 1.2, upgrade5TimesBought)) {
    turtlesPerSecond += 80;
    score -= getUpgradeCost(13000, 1.2, upgrade5TimesBought);
    upgrade5TimesBought++;
    updateFunction();
    saveGame();
  }
});

/* Rich Hand Upgrade */
document.getElementById("buy6").addEventListener("click", function () {
  if (score >= getUpgradeCost(20000, 1.2, upgrade6TimesBought)) {
    turtlesPerClick += 12;
    score -= getUpgradeCost(20000, 1.2, upgrade6TimesBought);
    upgrade6TimesBought++;
    updateFunction();
    saveGame();
  }
});

/* Turtle Power Plant Upgrade */
document.getElementById("buy7").addEventListener("click", function () {
  if (score >= getUpgradeCost(40000, 1.2, upgrade7TimesBought)) {
    turtlesPerSecond += 125;
    score -= getUpgradeCost(40000, 1.2, upgrade7TimesBought);
    upgrade7TimesBought++;
    updateFunction();
    saveGame();
  }
});

/* Rich Hand Upgrade */
document.getElementById("buy8").addEventListener("click", function () {
  if (score >= getUpgradeCost(20000, 1.2, upgrade8TimesBought)) {
    turtlesPerClick += 12;
    score -= getUpgradeCost(20000, 1.2, upgrade8TimesBought);
    upgrade8TimesBought++;
    updateFunction();
    saveGame();
  }
});
