let animationRunning = false;
export function toggleDarkmode() {
    if(!(animationRunning)) {
        animationRunning = true;
        let oldTransitions = [];

        document.querySelectorAll('*').forEach((element) => {
            // Save old Transition
            let transition = element.style.transition;
            oldTransitions.push({'element': element, 'transition': transition});

            // Override Transition
            if(element.style.transition !== null && element.style.transition !== '') {
                element.style.transition = 'background-color 1000ms ease, color 1000ms ease, ' + element.style.transition;
            } else {
                element.style.transition = 'background-color 1000ms ease, color 1000ms ease';
            }

            console.log(element.style.transition);
        });

        console.log(oldTransitions);

        setTimeout(() => {
            document.querySelector('body').classList.toggle('darkmode');

            // Restore old Transitions
            setTimeout(() => {
                oldTransitions.forEach((oldTransition) => {
                    oldTransition['element'].style.transition = oldTransition['transition'];
                });

                animationRunning = false;
            }, 1000);
        }, 10);
    }
}