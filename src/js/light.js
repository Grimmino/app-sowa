//vars
var SideBar = document.querySelector(".sidebar");
var SwHeader = document.querySelector(".sw-header");
var CreateList = document.querySelector(".create-list");
var BurgerIcon = document.querySelector(".icon--ei-navicon");
var SwitchIcon = document.querySelector(".icon--ei-star");
var MainBlock = document.querySelector(".content");
var SwitchMode = document.querySelector(".sw-header__switchmode");

//light mode
SwitchMode.addEventListener("click",LightDark);

function LightDark() {
    SwHeader.classList.toggle("light");
    SwHeader.classList.toggle("light__header");

    SideBar.classList.toggle("light");
    SideBar.classList.toggle("light__sidebar");

    MainBlock.classList.toggle("light");

    CreateList.classList.toggle("light__createlist");

    BurgerIcon.classList.toggle("light__icon--ei-navicon");
    SwitchIcon.classList.toggle("light__icon--ei-star");

}