const headerBtn = document.querySelector('header button');



headerBtn.addEventListener('click', () => {
    headerBtn.classList.toggle('is--active');
});

let scrollPos = window.scrollY
let prevScrollPos = window.scrollY
let currentPos = 0;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight


window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    const scrollUp = scrollPos < prevScrollPos;

    // scrollPos >= headerHeight ? header.classList.add('header__sticky') : header.classList.remove('header__sticky');

    // scrollUp ? header.classList.add('scrolled') : header.classList.remove('scrolled');

    if (scrollPos >= headerHeight) {
        scrollUp ? header.classList.add('header__sticky') : header.classList.remove('header__sticky');
    }

    if (scrollPos < headerHeight) {
        header.classList.remove('header__sticky');
    }

    console.log(scrollPos);

    prevScrollPos = scrollPos;
});