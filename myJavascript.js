const U = document.getElementsByClassName("U");
const X = document.getElementsByClassName("X");
const D = document.getElementsByClassName("D");
const UXD = document.getElementById("UXD");
const user = document.getElementById("UserBox");
const experience = document.getElementById("ExperienceBox");
const design = document.getElementById("DesignBox");
const arrowLeft = document.getElementById("arrowLeft");
const arrowDown = document.getElementById("arrowDown");
const arrowRight = document.getElementById("arrowRight");
const U3 = document.getElementById("U3");
const X3 = document.getElementById("X3");
const D3 = document.getElementById("D3");
const AboutMe = document.getElementById("AboutMe");
const Contact = document.getElementById("Contact");
const AboutMeBackground = document.getElementById("AboutMeBackground");

// Hover U
U3.onmouseover = function () {

  document.getElementById("U1").style.fill = "#FFD84C";
  document.getElementById("U2").style.fill = "#FFD84C";
  U3.style.fill = "#FFD84C";

}

U3.onmouseleave = function () {
  document.getElementById("U1").style.fill = "#000";
  document.getElementById("U2").style.fill = "#000";
  U3.style.fill = "#000";
}

// Hover X
X3.onmouseover = function () {

  document.getElementById("X1").style.fill = "#D891F9";
  document.getElementById("X2").style.fill = "#D891F9";
  X3.style.fill = "#D891F9";
}

X3.onmouseleave = function () {

  document.getElementById("X1").style.fill = "#000";
  document.getElementById("X2").style.fill = "#000";
  X3.style.fill = "#000";
}

// Hover D
D3.onmouseover = function () {

  document.getElementById("D1").style.fill = "#A9CDDD";
  document.getElementById("D2").style.fill = "#A9CDDD";
  D3.style.fill = "#A9CDDD";
}

D3.onmouseleave = function () {

  document.getElementById("D1").style.fill = "#000";
  document.getElementById("D2").style.fill = "#000";
  D3.style.fill = "#000";
}

// Visibilty
user.style.display = "none";
arrowLeft.style.display = "none";
experience.style.display = "none";
arrowDown.style.display = "none";
design.style.display = "none";
arrowRight.style.display = "none";
AboutMeBackground.style.display = "none";

U3.onmousedown = function () {
  // show relevant boxes
  user.style.display = "block";
  arrowLeft.style.display = "block";
  // hide other boxes
  experience.style.display = "none";
  arrowDown.style.display = "none";
  design.style.display = "none";
  arrowRight.style.display = "none";
}

X3.onmousedown = function () {
  // show relevant boxes
  experience.style.display = "block";
  arrowDown.style.display = "block";
  // hide other boxes
  user.style.display = "none";
  arrowLeft.style.display = "none";
  design.style.display = "none";
  arrowRight.style.display = "none";
}

D3.onmousedown = function () {
  // show relevant boxes
  design.style.display = "block";
  arrowRight.style.display = "block";
  // hide other boxes
  user.style.display = "none";
  arrowLeft.style.display = "none";
  experience.style.display = "none";
  arrowDown.style.display = "none";
}

AboutMe.onmousedown = function () {
  // Schließicon fehlt
  if (AboutMeBackground.style.display == "none")
    AboutMeBackground.style.display = "block";
  else
    AboutMeBackground.style.display = "none";
}

// holographic backgorund movement

function updateHolographicBackground(value) {
  const percentage = value * 100;
  AboutMeBackground.style.backgroundPosition = percentage + "%";
}

function handleMouseMove(event) {
  const x = event.clientX;
  const width = document.documentElement.clientWidth;
  const value = x / width;
  updateHolographicBackground(value);
}

function handleDeviceOrientation(event) {
  const z = Math.abs(event.alpha); // rotation degrees from 0 to 360
  const value = z / 360;
  updateHolographicBackground(value);
}

window.addEventListener("deviceorientation", handleDeviceOrientation, true);


var video = document.getElementById("myVideo");
video.controls = false;

video.onmousedown = function ShowControls() {
  video.controls = true;
}