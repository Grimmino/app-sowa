//popup
document.querySelector(".create-list").addEventListener("click",ShowPopup_SelectList);
function ShowPopup_SelectList() {
    document.querySelector(".popup-select-list").style = "visibility: visible";
}
document.querySelector(".close").addEventListener("click",CloseAllPopup);
function CloseAllPopup() {
    document.querySelector(".popup").style = "visibility: hidden";
}


//добавляем список
var ChoiceList = document.querySelectorAll(".addList");
ChoiceList.forEach( function(el) {
    el.addEventListener("click",addList);

    function addList() {
        if (el.className === "addList addSplList") {
            alert ("создаем обычный список!")
        } else {
            alert ("создаем НЕобычный список!")
        }
    }
});



