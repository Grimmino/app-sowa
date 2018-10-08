//var
var SideBar = document.querySelector(".sidebar__profile");

//popup
var CreatList = document.querySelector(".btn__create-list");

CreatList.addEventListener("click",ShowPopup_SelectList);
function ShowPopup_SelectList() {
    document.querySelector(".popup-select-list").style = "display: block";
}
document.querySelector(".close").addEventListener("click",CloseAllPopup);
function CloseAllPopup() {
    document.querySelector(".popup").style = "display: none";
}


//burger
document.querySelector(".burger").addEventListener("click",ShowSidebar);

function ShowSidebar() {
    var classcheck = SideBar.classList.contains("sidebar__profile-active");
        ( classcheck !== true ) ? 
        (SideBar.classList.add("sidebar__profile-active")) 
        : (SideBar.classList.remove("sidebar__profile-active"));
}


//добавляем список
var ChoiceList = document.querySelectorAll(".addList");

ChoiceList.forEach( function(el) {
    el.addEventListener("click",addList);

    function addList () {
        var newLi = document.createElement('div');
        elClassName = el.classList[1];
        if (elClassName === "addSplList") {
            newLi.className = "SplList";
        } else {
            newLi.className = "NotSplList";
            
        }

        SideBar.insertBefore(newLi, CreatList);
        document.querySelector(".popup").style = "display: block";
      };
});

//sidebar
var BtnActiveited = document.querySelector(".btn__create-list");
BtnActiveited.addEventListener("click",BtnActive);

function BtnActive() {
    var SidebarClschek = BtnActiveited.classList.contains("btn__create-list_active");
        ( SidebarClschek !== true ) ? 
        (BtnActiveited.classList.add("btn__create-list_active")) 
        : (BtnActiveited.classList.remove("btn__create-list_active"));
}