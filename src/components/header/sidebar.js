var shown = false;
export function toggleSidebar() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navBreakers = document.querySelectorAll('.nav-links hr');
    const alpha = document.querySelector('.alpha');

    // Toggle Navigation
    nav.classList.toggle('nav-default');
    nav.classList.toggle('nav-active');

    // Animate Alpha Screen
    if(alpha.style.animation.includes("alphaScreenFadeIn")) {
        alpha.style.animation = "alphaScreenFadeOut 200ms ease forwards";
    } else {
        alpha.style.animation = "alphaScreenFadeIn 1000ms ease forwards";
    }

    // Change Burger
    burger.classList.toggle('close');

    if(!(shown)) {
        // Disable Scrolling
        document.querySelector('html').scrollTop = window.scrollY;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'relative';
        document.querySelector('html').style.overflow = 'hidden';
        document.querySelector('html').style.position = 'relative';

        shown = true;
    } else {
        // Enable Scrolling
        document.body.style.overflow = null;
        document.body.style.position = null;
        document.querySelector('html').style.overflow = null;
        document.querySelector('html').style.position = null;

        shown = false;
    }

    // Animate Link
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 200ms ease forwards`;
        }

        link.addEventListener('click', () => {
        toggleSidebar();
        });
    });

    // Animate Breakers
    navBreakers.forEach((breaker, index) => {
        if(breaker.style.animation) {
        breaker.style.animation = '';
        } else {
        breaker.style.animation = `navLinkFade 200ms ease forwards`;
        }
    });
}