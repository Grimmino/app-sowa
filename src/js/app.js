//popup
//появление
document.querySelector(".create-list").addEventListener("click",SelectList);
function SelectList() {
    document.querySelector(".popup-select-list").style = "visibility: visible";
}
//закрытие
document.querySelector(".close").addEventListener("click",ClosePopup);
function ClosePopup() {
    document.querySelector(".popup").style = "visibility: hidden";
}



//добавляем список
/*var el = document.querySelectorAll("div.addList");
console.log(el);

el.addEventListener("click",addList);


function addList() {
    var typeList = this.className;
    console.log(typeList);
    var NewList = document.createElement('div');
    NewList.className = "btn" + typeList;
    NewList.innerHTML =
        "<div class="+ +typeList + ">обычный список</div>" +
        "<div class="+ +typeList + "></div>";

    sidebar.appendChild(NewList);
}*/

