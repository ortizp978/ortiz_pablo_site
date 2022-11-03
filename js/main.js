(() => {

const toggleMenuElement = document.getElementById('toggle_menu');
const mainMenuElement = document.getElementById('main_menu');

toggleMenuElement.addEventListener('click',() => {
    mainMenuElement.classList.toggle('main_menu--show');
});

})()