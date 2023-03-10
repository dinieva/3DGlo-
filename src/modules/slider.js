const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    let dotsBlock = document.querySelector('.portfolio-dots');
    let dots = document.querySelectorAll('.dot');
    const timeInterval = 2000;

    let currentSlide = 0;

    let interval;

    //Удалить все элементы со страницы с классом dot (из верстки Index.html)
    const clearDotsBlock = () => {
        //---- 1 способ ----
        dotsBlock.innerHTML = ' ';
        //---- 2 способ ----
        /* while (dotsBlock.firstChild) {
            dotsBlock.removeChild(dotsBlock.lastChild)
        } */
        //---- 3 способ ----
        //dotsBlock.replaceChildren();
        //---- 4 способ ----
        /* dots.forEach((dot, index) => {
            dotsBlock.remove(dots[index]);
        }) */
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const checkDots = () => {
        clearDotsBlock() // удаляем пагинацию из блока

        /* if (dots.length < slides.length){
            let newDot = document.createElement('li');
            dots.append(newDot);
        }  */

        if (dotsBlock.children.length !== slides.length) {
            slides.forEach((slide, index) => {
                dotsBlock.append(dots[index]);
            })
        }
    };

    const autoSlide = () => {
        checkDots()
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stoptSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        }
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')

        if (e.target.matches('#arrow-right')) {
            currentSlide++

        } else if (e.target.matches('#arrow-left')) {
            currentSlide--

        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    })

    //останавливаем таймер при наведении курсора на стрелки и переключатели 
    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stoptSlide()
        }
    }, true)

    //запускаем таймер при наведении курсора на стрелки и переключатели 
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval)
        }
    }, true)

    startSlide(timeInterval) //запускаем таймер
}

export default slider