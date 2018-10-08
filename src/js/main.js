"use strict";

require("./vendor");

require("./components.js");


document.querySelector('.createlist').addEventListener('click', function () {
  document.querySelector('.popup__addlist').style = 'display: block';
});
document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.popup__addlist').style = 'display: none';
}); //create list

document.querySelector('.submit').addEventListener('click', CreateList);

function CreateList() {
  var text = document.getElementById('text');
  var NewList = document.createElement('div');
  NewList.className = 'list__item';
  NewList.innerHTML = text.value;
  var AddList = document.querySelector('.btn__sw-sidebar-main');
  document.querySelector(".sw-sidebar__main").appendChild(NewList, AddList);
  document.querySelector('.popup__addlist').style = 'display: none';
}; 