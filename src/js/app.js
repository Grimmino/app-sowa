var addList = document.querySelector(".add-list");
var popup = document.querySelector(".popup");
var close = document.querySelector(".close");

addList.addEventListener("click",SelectList);
close.addEventListener("click",closepopup);

function SelectList() {
    popup.style = "visibility: visible";
}

function closepopup() {
    popup.style = "visibility: hidden";
}