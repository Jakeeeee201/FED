const headerBtn = document.querySelector('header button');
const playBtn = document.querySelector('header > button');
const circles = document.querySelectorAll('.circle');


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

    // console.log(scrollPos);

    prevScrollPos = scrollPos;
});


playBtn.addEventListener('click', () => {
    circles.forEach(e => {
        e.classList.toggle('is--active');
    });
});


// hier staan alle js codes voor het veranderen van de achtergrond kleur per section
// code geschreven door Hooft, M.S. t
const sections = document.querySelectorAll('main section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        const intersecting = e.isIntersecting;

        // if (intersecting == true) {
        //     e.target.classList.add('is--active');
        // } else if (intersecting == false) {
        //     e.target.classList.remove('is--active');
        // }

        intersecting ? e.target.classList.add('is--active') : e.target.classList.remove('is--active');
    });

    // als de section .15 in beeld is dan wordt de code uitgevoerd
}, {
    threshold: .15
})

sections.forEach(section => {
    observer.observe(section)
})
// hier eindigen alle js codes voor het veranderen van de achtergrond kleur per section