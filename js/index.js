let showTextOne = document.getElementById("showTextOne");
let showTextTwo = document.getElementById("showTextTwo");
let showTextThree = document.getElementById("showTextThree");
//
let showTextFour = document.getElementById("showTextFour");
let showTextFive = document.getElementById("showTextFive");
let showTextSix = document.getElementById("showTextSix");
let showTextSiven = document.getElementById("showTextSiven");
let showTextEight = document.getElementById("showTextEight");
//
let textHiddenOne = document.getElementById("textHiddenOne");
let textHiddenTwo = document.getElementById("textHiddenTwo");
let textHiddenThree = document.getElementById("textHiddenThree");
//
let textHiddenFour = document.getElementById("textHiddenFour");
let textHiddenFive = document.getElementById("textHiddenFive");
let textHiddenSix = document.getElementById("textHiddenSix");
let textHiddenSiven = document.getElementById("textHiddenSiven");
let textHiddenEight = document.getElementById("textHiddenEight");
//
let showIcon = document.getElementById("showIcon");
let showIconTwo = document.getElementById("showIconTwo");
let showIconThree = document.getElementById("showIconThree");
//
let showIconFour = document.getElementById("showIconFour");
let showIconFive = document.getElementById("showIconFive");
let showIconSix = document.getElementById("showIconSix");
let showIconSiven = document.getElementById("showIconSiven");
let showIconEight = document.getElementById("showIconEight");
//
let hideIcon = document.getElementById("hideIcon");
let hideIconTwo = document.getElementById("hideIconTwo");
let hideIconThree = document.getElementById("hideIconThree");
//
let hideIconFour = document.getElementById("hideIconFour");
let hideIconFive = document.getElementById("hideIconFive");
let hideIconSix = document.getElementById("hideIconSix");
let hideIconSiven = document.getElementById("hideIconSiven");
let hideIconEight = document.getElementById("hideIconEight");


/// hide & show text for whyList one
showTextOne.addEventListener("click", function () {
  showTextOne.style.color = "#343a40";
  if (textHiddenOne.style.display == "block") {
    textHiddenOne.style.display = "none";
    showIcon.style.display = "none";
    hideIcon.style.display = "block";
  } else {
    showTextOne.style.color = "#47b2e4";
    textHiddenOne.style.display = "block";
    showIcon.style.display = "block";
    hideIcon.style.display = "none";
  }
});

/// show & hide text for whyList two
showTextTwo.addEventListener("click", function () {
  showTextTwo.style.color = "#47b2e4";
  if (textHiddenTwo.style.display == "none") {
    textHiddenTwo.style.display = "block";
    showIconTwo.style.display = "none";
    hideIconTwo.style.display = "block";
  } else {
    showTextTwo.style.color = "#343a40";
    textHiddenTwo.style.display = "none";
    showIconTwo.style.display = "block";
    hideIconTwo.style.display = "none";
  }
});

/// show & hide text for whyList three
showTextThree.addEventListener("click", function () {
  showTextThree.style.color = "#47b2e4";
  if (textHiddenThree.style.display == "none") {
    textHiddenThree.style.display = "block";
    showIconThree.style.display = "none";
    hideIconThree.style.display = "block";
  } else {
    showTextThree.style.color = "#343a40";
    textHiddenThree.style.display = "none";
    showIconThree.style.display = "block";
    hideIconThree.style.display = "none";
  }
});

showTextFour.addEventListener("click", function () {
  showTextFour.style.color = "#343a40";
  if (textHiddenFour.style.display == "block") {
    textHiddenFour.style.display = "none";
    showIconFour.style.display = "none";
    hideIconFour.style.display = "block";
  } else {
    showTextFour.style.color = "#47b2e4";
    textHiddenFour.style.display = "block";
    showIconFour.style.display = "block";
    hideIconFour.style.display = "none";
  }
});

showTextFive.addEventListener("click", function () {
  showTextFive.style.color = "#47b2e4";
  if (textHiddenFive.style.display == "none") {
    textHiddenFive.style.display = "block";
    showIconFive.style.display = "none";
    hideIconFive.style.display = "block";
  } else {
    showTextFive.style.color = "#343a40";
    textHiddenFive.style.display = "none";
    showIconFive.style.display = "block";
    hideIconFive.style.display = "none";
  }
});

showTextSix.addEventListener("click", function () {
  showTextSix.style.color = "#47b2e4";
  if (textHiddenSix.style.display == "none") {
    textHiddenSix.style.display = "block";
    showIconSix.style.display = "none";
    hideIconSix.style.display = "block";
  } else {
    showTextSix.style.color = "#343a40";
    textHiddenSix.style.display = "none";
    showIconSix.style.display = "block";
    hideIconSix.style.display = "none";
  }
});

showTextSiven.addEventListener("click", function () {
  showTextSiven.style.color = "#47b2e4";
  if (textHiddenSiven.style.display == "none") {
    textHiddenSiven.style.display = "block";
    showIconSiven.style.display = "none";
    hideIconSiven.style.display = "block";
  } else {
    showTextSiven.style.color = "#343a40";
    textHiddenSiven.style.display = "none";
    showIconSiven.style.display = "block";
    hideIconSiven.style.display = "none";
  }
});

showTextEight.addEventListener("click", function () {
  showTextEight.style.color = "#47b2e4";
  if (textHiddenEight.style.display == "none") {
    textHiddenEight.style.display = "block";
    showIconEight.style.display = "none";
    hideIconEight.style.display = "block";
  } else {
    showTextEight.style.color = "#343a40";
    textHiddenEight.style.display = "none";
    showIconEight.style.display = "block";
    hideIconEight.style.display = "none";
  }
});

///// filter product for each category/////
//get all btn and products lists
let allBtn = document.getElementById("all");

var appBtn = document.getElementById("app");

var cardBtn = document.getElementById("card");

var webBtn = document.getElementById("web");

var allProduct = document.getElementById("allProduct");

var appProduct = document.getElementById("appProduct");

var cardProduct = document.getElementById("cardProduct");

var webProduct = document.getElementById("webProduct");

// function for each product category when click
allBtn.addEventListener("click", function () {
  if (allProduct.style.display == "none") {
    appProduct.style.display = "none";
    allProduct.style.display = "flex";
    cardProduct.style.display = "none";
    webProduct.style.display = "none";
  }
});
appBtn.addEventListener("click", function () {
  if (appProduct.style.display == "none") {
    appProduct.style.display = "flex";
    allProduct.style.display = "none";
    cardProduct.style.display = "none";
    webProduct.style.display = "none";
  }
});
cardBtn.addEventListener("click", function () {
  if (cardProduct.style.display == "none") {
    appProduct.style.display = "none";
    allProduct.style.display = "none";
    cardProduct.style.display = "flex";
    webProduct.style.display = "none";
  }
});
webBtn.addEventListener("click", function () {
  if (webProduct.style.display == "none") {
    appProduct.style.display = "none";
    allProduct.style.display = "none";
    cardProduct.style.display = "none";
    webProduct.style.display = "flex";
  }
});

// Add a class active for each btn when click
let btns = document.querySelectorAll("#activeBtn");
btns.forEach((button) => {
  button.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});
