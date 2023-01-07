const calc = () => {
    const calcBlock = document.querySelector('.calc-block')
    const calcBlockInputs = calcBlock.querySelectorAll('input')

    calcBlockInputs.forEach(function (input) {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    });
};

export default calc