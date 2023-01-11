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
        if (calcType.value && calcSquare.value > 0 && calcCount.value > 0 && calcDay.value > 0) {

            /* const time = 1000; //промежуток за который пересчитывается итоговая сумма,т.е длительность
            const step = 50; //шаг,который прибавляется 

            const changeSum = (num, elem) => {
                let n = 0;
                let t = Math.round(time / (num / step));
                let interval = setInterval(() => {
                    n = n + step;
                    if (n == num) {
                        clearInterval(interval);
                    }
                    elem.textContent = n;
                }, t);
            }

            changeSum(totalValue, total) */

            animateCalc({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },

                draw(progress) {
                    /* let n = 0;
                    n = n + 50;
                    if (n == totalValue) {
                        cancelAnimationFrame(requestId);
                    } */
                    total.textContent = totalValue;
                }
            });
        }

        console.log(totalValue)

    }

    calcBlock.addEventListener('change', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc()
        }
    })


}

export default calc