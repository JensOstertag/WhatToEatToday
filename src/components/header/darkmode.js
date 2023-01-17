let animationRunning = false;

export function init() {
    if(localStorage.getItem('darkmode') !== null) {
        if(localStorage.getItem('darkmode') === 'true') {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    } else {
        localStorage.setItem('darkmode', false);
    }
}

export function toggleDarkmode() {
    if(!(animationRunning)) {
        animationRunning = true;

        document.querySelector('body').classList.toggle('dark-transition');
        document.querySelector('html').classList.toggle('dark');

        if(localStorage.getItem('darkmode') !== null) {
            console.log(!(localStorage.getItem('darkmode') === 'true'));
            localStorage.setItem('darkmode', !(localStorage.getItem('darkmode') === 'true'));
        }

        setTimeout(() => {
            document.querySelector('body').classList.toggle('dark-transition');
            animationRunning = false;
        }, 1000);
    }
}