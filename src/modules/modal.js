import { animate } from './helpers'

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const closeBtn = modal.querySelector('.popup-close')


    if (window.innerWidth >= '768') {
        /* modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out
    `; */
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                /* modal.style.visibility = 'visible';
                modal.style.opacity = 1; */

                setTimeout(() => {
                    animate({
                        duration: 100,
                        timing(timeFraction) {
                            return timeFraction;
                        },

                        draw(progress) {
                            modal.style.display = 'block';
                        }
                    });
                }, 300);
            });
        });

        closeBtn.addEventListener('click', () => {
            /* modal.style.opacity = 0;
            setTimeout(() => {
                modal.style.visibility = 'hidden';
            }, 300); */
            setTimeout(() => {
                animate({
                    duration: 100,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.display = 'none';
                    }
                });
            }, 500);

        });
    } else if (window.innerWidth < '768') {
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });

        /* closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        }); */

    }

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
            console.log(e.target);
        }
    });

}

export default modal