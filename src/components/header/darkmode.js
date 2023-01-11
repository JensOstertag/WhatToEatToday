let animationRunning = false;
export function toggleDarkmode() {
    if(!(animationRunning)) {
        animationRunning = true;

        document.querySelector('body').classList.toggle('dark-transition');
        document.querySelector('html').classList.toggle('dark');

        setTimeout(() => {
            document.querySelector('body').classList.toggle('dark-transition');
            animationRunning = false;
        }, 1000);
    }
}