const U = document.getElementsByClassName("U");
const X = document.getElementsByClassName("X");
const D = document.getElementsByClassName("D");
const UXD = document.getElementById("UXD");
const user = document.getElementById("UserBox");
const experience = document.getElementById("ExperienceBox");
const design = document.getElementById("DesignBox");
const X3 = document.getElementById("X3");
const D3 = document.getElementById("D3");
const AboutMe = document.getElementById("AboutMe");
const Contact = document.getElementById("Contact");
const AboutMeBackground = document.getElementById("AboutMeBackground");
const ContactBackground = document.getElementById("ContactBackground");
const closeButton = document.getElementById("close");
const closeButton2 = document.getElementById("close2");
const sidebar = document.getElementById("sidebar");
const sidebarbg = document.getElementById("sidebarbg");

// Visibilty
user.style.display = "block";
experience.style.display = "block";
design.style.display = " block";
AboutMeBackground.style.display = "none";
ContactBackground.style.display = "none";

// buttons landing page
const personas = document.getElementById("personas");
personas.onmouseover = personas.onmouseout = UserAction;
const researchAndTesting = document.getElementById("researchAndTesting");
researchAndTesting.onmouseover = researchAndTesting.onmouseout = UserAction;

const seness = document.getElementById("seness");
seness.onmouseover = seness.onmouseout = ExperienceAction;
const empoweringWomen = document.getElementById("empoweringWomen");
empoweringWomen.onmouseover = empoweringWomen.onmouseout = ExperienceAction;

const logo = document.getElementById("logo");
logo.onmouseover = logo.onmouseout = DesignAction;
const poster = document.getElementById("poster");
poster.onmouseover = poster.onmouseout = DesignAction;

// Hover U

function UserAction(event) {

  if (event.type == 'mouseover') {
    document.getElementById("U1").style.fill = "#FFC94B";
    document.getElementById("U2").style.fill = "#FFC94B";
    U3.style.fill = "#FFC94B";
    document.body.style.cursor = "pointer";
  }
  if (event.type == 'mouseout') {
    document.getElementById("U1").style.fill = "#4A6163";
    document.getElementById("U2").style.fill = "#4A6163";
    U3.style.fill = "#4A6163";
    document.body.style.cursor = "default";
  }
}

// Hover X

function ExperienceAction(event) {

  if (event.type == 'mouseover') {
    document.getElementById("X1").style.fill = "#F9A66C";
    document.getElementById("X2").style.fill = "#F9A66C";
    X3.style.fill = "#F9A66C";
    document.body.style.cursor = "pointer";
  }
  if (event.type == 'mouseout') {
    document.getElementById("X1").style.fill = "#4A6163";
    document.getElementById("X2").style.fill = "#4A6163";
    X3.style.fill = "#4A6163";
    document.body.style.cursor = "default";
  }
}

// Hover D

function DesignAction(event) {

  if (event.type == 'mouseover') {
    document.getElementById("D1").style.fill = "#F17A7E";
  document.getElementById("D2").style.fill = "#F17A7E";
  D3.style.fill = "#F17A7E";
  document.body.style.cursor = "pointer";
  }
  if (event.type == 'mouseout') {
    document.getElementById("D1").style.fill = "#4A6163";
    document.getElementById("D2").style.fill = "#4A6163";
    D3.style.fill = "#4A6163";
    document.body.style.cursor = "default";
  }
}

// About Me Card
AboutMe.onmouseover = function (){
  AboutMe.style.fontWeight = "bold";
}

AboutMe.onmouseout = function (){
  AboutMe.style.fontWeight = "normal";
}

AboutMe.onmousedown = function () {
  AboutMeBackground.style.display = "flex";
  AboutMe.style.fontWeight = "bold";
  ContactBackground.style.display = "none";
  Contact.style.fontWeight = "normal";
  sidebarbg.style.width = "100vw";
}

closeButton.onmousedown = function () {
  AboutMeBackground.style.display = "none";
  AboutMe.style.fontWeight = "normal";
  sidebarbg.style.width = "68px";
}

// Contact Card

Contact.onmouseover = function (){
  Contact.style.fontWeight = "bold";
}

Contact.onmouseout = function (){
  Contact.style.fontWeight = "normal";
}

Contact.onmousedown = function () {
  AboutMeBackground.style.display = "none";
  AboutMe.style.fontWeight = "normal";
  ContactBackground.style.display = "flex";
  Contact.style.fontWeight = "bold";
  sidebarbg.style.width = "100vw";
}

closeButton2.onmousedown = function () {
  ContactBackground.style.display = "none";
  Contact.style.fontWeight = "normal";
  sidebarbg.style.width = "68px";
}