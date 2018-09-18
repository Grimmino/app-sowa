var createList = document.querySelector(".create-list");
var popup = document.querySelector(".popup");
var close = document.querySelector(".close");
var addSplList = document.querySelector(".addSplList");
var addNotSplList = document.querySelector(".addNotSplList");
var sidebar = document.querySelector(".sidebar");

createList.addEventListener("click",SelectList);
close.addEventListener("click",closepopup);

addSplList.addEventListener("click",add_SplList);
addNotSplList.addEventListener("click",add_NotSplList);

function SelectList() {
    popup.style = "visibility: visible";
}
function closepopup() {
    popup.style = "visibility: hidden";
}

function add_SplList() {
    var newList = document.createElement('div');
    newList.innerHTML = '<div class="btn ">простой список</div>';
    sidebar.appendChild(newList);
    popup.style = "visibility: hidden";
}

function add_NotSplList() {
    var newList = document.createElement('div');
    newList.innerHTML = '<div class="btn ">не простой список</div>';
    sidebar.appendChild(newList);
    popup.style = "visibility: hidden";
}