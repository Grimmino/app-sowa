//переменные
let miniProfile = document.querySelector('.miniprofile')
let logo = document.querySelector('.logo')
let miniprofileNav = document.querySelector('.miniprofile__nav')
let logoInfo = document.querySelector('.logo__info')
//смена класса ACTIVE при клике
function toggleActiveThis() {
    this.classList.toggle('active')
}
//удаление класса ACTIVE при клике за пределами элемента с этим классом
function removeActive(e) {
    let that = document.querySelector('.active')
    let eventTarget = e.target.matches('.active *')
    if (!eventTarget) {
        that.classList.remove('active');
    }
};
window.addEventListener('click', removeActive);
//вызов информации обо мне при клике на логотип
logo.addEventListener('click', toggleActiveThis, false);
//появление опций в минипрофиле при клике
miniprofileNav.addEventListener('click', toggleActiveThis, false);
//появление меню в минипрофиле при hover
miniProfile.addEventListener('mouseover', function(){
    this.classList.add('active');
});
miniProfile.addEventListener('mouseout', function(){
    this.classList.remove('active');
});