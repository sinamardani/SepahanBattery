//VARIABLES
const productMenu = document.getElementById("ShowProductMenu");
const productSubMenu = document.getElementById("ShowProductMenuOfMenu");
const technologyMenu = document.getElementById("ShowTechnologyMenu");
const sepahanPlusMagazineMenu = document.getElementById("SepahanPlusMagazine");
const aboutUsMenu = document.getElementById("AboutUs");
const contactUsMenu = document.getElementById("ContactUs");
const hamburgerBtn = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossBtn = document.querySelector(".cross-icon");

//FUNCTIONS
const showMenuHandler = function (e) {
  const ul = e.target.childNodes[3];
  ul.style.animation = "showUp 0.35s 1";
  ul.style.display = "block";
};

const hideMenuHandler = function (e) {
  const ul = e.target.childNodes[3];
  ul.style.display = "none";
};

//NAVBAR SCRIPT

productMenu.addEventListener("mouseenter", (e) => {
  showMenuHandler(e);
});
productMenu.addEventListener("mouseleave", (e) => {
  hideMenuHandler(e);
});
productSubMenu.addEventListener("mouseenter", (e) => {
  showMenuHandler(e);
});
productSubMenu.addEventListener("mouseleave", (e) => {
  hideMenuHandler(e);
});
technologyMenu.addEventListener("mouseenter", (e) => {
  showMenuHandler(e);
});
technologyMenu.addEventListener("mouseleave", (e) => {
  hideMenuHandler(e);
});
sepahanPlusMagazineMenu.addEventListener("mouseenter", (e) => {
  showMenuHandler(e);
});
sepahanPlusMagazineMenu.addEventListener("mouseleave", (e) => {
  hideMenuHandler(e);
});
aboutUsMenu.addEventListener("mouseenter", (e) => {
  showMenuHandler(e);
});
aboutUsMenu.addEventListener("mouseleave", (e) => {
  hideMenuHandler(e);
});
contactUsMenu.addEventListener("mouseenter", (e) => {
  showMenuHandler(e);
});
contactUsMenu.addEventListener("mouseleave", (e) => {
  hideMenuHandler(e);
});

//Hamburger Menu 
hamburgerBtn.addEventListener("click", () => {
  hamburgerMenu.classList.add("show-hamburger-menu");
  hamburgerMenu.classList.remove("hide-hamburger-menu");
});

crossBtn.addEventListener("click", () => {
  hamburgerMenu.classList.remove("show-hamburger-menu");
  hamburgerMenu.classList.add("hide-hamburger-menu");
});

//MAIN SCRIPT
window.addEventListener("load", () => {});
