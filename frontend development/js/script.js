const menu = document.querySelector('.nav__menu');


if (menu) {
    menu.addEventListener('click', () => {
        menu.classList.toggle('is--active');
    });
}