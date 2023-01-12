// импортировать в нужный файл import { animate } from './helpers'

const slicer = (str, num) => {
    console.log('helpers slicer')
    return str.trim().length > num ? str.trim().substring(0, num) + '...' : str.trim()

    console.log(slicer(text, 20))
}

const animate = ({ timing, draw, duration }) => { // передается объект с настройками duration- длительность анимации
    let start = performance.now(); //отработка метода, который возвращает время начала(старта) анимации на данный момент

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration; // (текущее время - время начала анимации) / продолжительность
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

const animateCalc = (options) => {
    let start = performance.now(); // сохранить время начала

    requestAnimationFrame(function func() {
        let timePassed = Date.now() - start;
        let progress = timePassed / options.duration;
        let timeFunction = options.timeFunction || function (progress) {
            return progress;
        };
        progress = progress > 1 ? 1 : progress;
        options.step(timeFunction(progress));
        if (progress === 1) {
            options.complete();
        } else {
            requestAnimationFrame(func);
        }
    });
}



export { slicer, animate, animateCalc }