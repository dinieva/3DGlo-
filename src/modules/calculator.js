import { animateCalc } from './helpers'

const calc = (price = 100) => { //(price = 100) - значение по умолчанию
    console.log('calc');

    const calcBlock = document.querySelector('.calc-block')
    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const total = document.getElementById('total')

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcSquareValue = calcSquare.value

        let totalValue = 0
        let calcCountValue = 1
        let calcDayValue = 1

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10
        }

        if (calcDay.value && calcDay.value < 5) { // проверка на существование calcDay.value
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue

        } else {
            totalValue = 0
        }

        //total.textContent = totalValue
        const duration = 1000;
        const step = 5;

        function changeSum(num, elem) {
            let n = 0;
            if (n < num) {
                let t = Math.round(duration / (num / step));
                let interval = setInterval(() => {
                    n = n + step;
                    if (n == num) {
                        clearInterval(interval);
                    }
                    elem.textContent = n;
                }, t);
            }

        }
        console.log(totalValue);
        changeSum(totalValue, total);

        // увеличение суммы методом requestAnimationFrame
        /* animateCalc({
            duration: 1000,
            step: function (progress) {
                let result = totalValue * progress;
                total.innerHTML = result * progress;
            },
            complete: function () { }
        }); */
    }

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc();
        }
    })
}

export default calc