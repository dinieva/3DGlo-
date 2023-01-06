const calc = () => {
    const calcBlock = document.querySelector('.calc-block')
    const calcBlockInputs = calcBlock.querySelectorAll('input')

    calcBlockInputs.forEach(function (input) {
        input.addEventListener('input', (e) => {
            //let isError = false;
            if (!/[^\d]/g.test(e.target.value) && e.target.value !== '') {
                console.log('isError = false');
            } else {
                //isError = true;
                e.target.setCustomValidity('Введите число.');
                e.target.reportValidity();
            }
        });
    })
};

export default calc