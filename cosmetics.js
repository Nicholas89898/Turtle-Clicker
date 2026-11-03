"use strict";

let colours = document.getElementById("colour");
let headwearCosmetic = document.getElementById("headwear");
let outfits = document.getElementById("outfits");
let accessories = document.getElementById("accessories");
let itemsGrid = document.getElementById("itemsGrid");

let cosmetics = {
  headwear: ["blackHat.png", "glasses.png"],
  outfits: ["blueShellOutfit.png", "lemonOutfit.png"],
  colours: ["redTurtle.png", "purpleTurtle.png", "turquoiseTurtle.png"],
};
let categoryButtons = document.querySelectorAll(".categoryButton");
let categoryTitle = document.getElementById("categoryTitle");

categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let category = button.dataset.category;
    showCategory(category);
  });
});

itemsGrid.innerHTML = "";

showCategory("headwear");
