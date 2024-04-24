// // Introduction
// var name = prompt("Please, enter your name");
// alert("Welcome to the Math website, " + name);

// Inputs and changes in triangle(1)

var outputArea1 = document.getElementById("output-area-1"); // outputArea1 was created
var btnCalcArea1 = document.getElementById("btn-calc-area-1"); // btnCalcArea1 was created
var AImg = document.getElementById("id-div-A");

btnCalcArea1.addEventListener("click", showArea1);

function showArea1() {
  var aH = +document.getElementById("a-h-input").value;
  var h = +document.getElementById("h-input").value;

  A = (1 / 2) * aH * h;

  //   Show output
  outputArea1.innerHTML = A + " (cm^2)";
  outputArea1.style.border = "1px solid rgba(19, 25, 39, 1)";

  //   Changes in image with value A
  AImg.innerHTML = A + " (cm^2)";
  AImg.style.color = "rgba(28, 82, 168, 1)";
  AImg.style.fontSize = "30px";
  AImg.style.fontFamily = `"Exo 2", sans-serif`;
}

var aH = document.getElementById("a-h-input"); // aH was created
var h = document.getElementById("h-input"); // h was created

// Changing the visual button and inputs
btnCalcArea1.addEventListener("click", changeBtnAndInputs);

function changeBtnAndInputs() {
  // Change button
  btnCalcArea1.style.background = "rgba(28, 82, 168, 0.25)";

  // Change inputs
  aH.style.background = "rgba(240, 150, 15, 0.25)";
  h.style.background = "rgba(240, 150, 15, 0.25)";
}

// Changes with values of triangle(1) (a(h) and h)

var aHImg = document.getElementById("id-div-a-h");

btnCalcArea1.addEventListener("click", changeValueAH);

function changeValueAH() {
  var aH = document.getElementById("a-h-input").value;

  aHImg.innerHTML = aH + " cm";

  aHImg.style.color = "rgba(28, 82, 168, 1)";
  aHImg.style.fontSize = "30px";
  aHImg.style.fontFamily = `"Exo 2", sans-serif`;
}

var hImg = document.getElementById("id-div-h");

btnCalcArea1.addEventListener("click", changeValueH);

function changeValueH() {
  var h = document.getElementById("h-input").value;

  hImg.innerHTML = h + " cm";

  hImg.style.color = "rgba(28, 82, 168, 1)";
  hImg.style.fontSize = "30px";
  hImg.style.fontFamily = `"Exo 2", sans-serif`;
}

// Clean everything

var btnCleanAll1 = document.getElementById("btn-clean-all-triangle1");

btnCleanAll1.addEventListener("click", showCleanInputs);

function showCleanInputs() {
  location.reload();
}
