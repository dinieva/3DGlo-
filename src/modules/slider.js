const slider = () => {
    console.log('slider');
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

    const checkDots = (index) => {
        dotsBlock.append(dots[index])
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
            dotsBlock.innerHTML = ' '
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
        checkDots(currentSlide)
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
            dots[currentSlide + 1].remove();
            if (dotsBlock.children.length == 0) {
                console.log('oops');
                dotsBlock.append(dots[0])
                dotsBlock.append(dots[1])
                dotsBlock.append(dots[2])
                dotsBlock.append(dots[3])
                dotsBlock.append(dots[4])
                dotsBlock.append(dots[5])
            }
            console.log(dotsBlock.children.length);

        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
            dotsBlock.innerHTML = ' '
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
        checkDots(currentSlide)
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
    console.dir(dotsBlock);
    clearDotsBlock()// удаляем пагинацию из блока
    checkDots(currentSlide)
}

export default slider