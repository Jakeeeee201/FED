
// Header & hero variabelen
const playBtn = document.querySelector('header > button');
const circles = document.querySelectorAll('.circle');
const playCube = document.querySelector('section.hero .cube__container');
const playCubeOn = document.querySelector('section.hero .cube:nth-child(3)');

// Navigatie variabelen
let scrollPos = window.scrollY
let prevScrollPos = window.scrollY
let currentPos = 0;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight

// Service items variabelen
const serviceItems = document.querySelectorAll('.service__list li');
const body = document.body;



/***********/
/* Functie voor de navigatie toggle, wanneer je omhoog scrollt */
/* Bron: ChatGPT als hulpmiddel gebruikt om een fout uit de code te halen */

/***********/
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

    prevScrollPos = scrollPos;
});



/***********/
/* Functie voor de play button state en toggle van play modus (button in de header)  */
/***********/
playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('is--active');
    playBtn.firstElementChild.classList.toggle('rotate');
    
    playCube.firstElementChild.classList.toggle('rotate');
    playCubeOn.classList.toggle('rotate');

    circles.forEach(e => {
        e.classList.toggle('is--active');
    });
});



/***********/
/* Functie voor de play button state en toggle van play modus  */
/***********/
playCube.addEventListener('click', () => {
    playBtn.classList.toggle('is--active');
    playBtn.firstElementChild.classList.toggle('rotate');
    
    playCube.firstElementChild.classList.toggle('rotate');
    playCubeOn.classList.toggle('rotate');


    circles.forEach(e => {
        e.classList.toggle('is--active');
    });
});



/***********/
/* Functie voor het openen van de service item elementen  */
/* Bron: ChatGPT als hulpmiddel gebruikt voor het optimaliseren van de code  */
/***********/
serviceItems.forEach(e => {
    e.addEventListener('click', (event) => {
        // Om te voorkomen dat het bovenliggende element toegang krijgt tot de event
        event.stopPropagation(); 

        // Verwijdert de class van alle service items
        serviceItems.forEach(item => {
            if (item !== e) {
                item.classList.remove('is--active');
            }
        });

        // Voegt de class toe wanneer er op een service item geklikt wordt
        e.classList.toggle('is--active');
    });
});

body.addEventListener('click', () => {
    // Verwijdert de class van alle service items wanneer er buiten de lijst gelikt wordt
    serviceItems.forEach(e => {
        e.classList.remove('is--active');
    });
});