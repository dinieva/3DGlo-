const validate = () => {
    console.log('validate');
    const forms = document.querySelectorAll('form');

    forms.forEach(function (form) {
        const inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.addEventListener('input', (e) => {
                if (e.target.type === 'text') {
                    //только кириллицы в любом регистре, дефиса и пробела.
                    e.target.value = e.target.value.replace(/[^а-яё\-\s]$/i, '');
                }

                if (e.target.type === 'email') {
                    //только латиницы в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * '
                    //e.target.value = e.target.value.replace(/[а-яё\)\(\s\?\&\:\%\;\$\#\+\^"]/gi, '');
                    e.target.value = e.target.value.replace(/[^\w\@\-\.\!\~\*\']/gi, '');
                    ///[^a-z0-9\-\@\_\.\!\~\*\']$/i
                }
                if (e.target.type === 'tel') {
                    // ввод только цифр, круглых скобок и дефис
                    e.target.value = e.target.value.replace(/[^\d\(\)\-]/g, '');
                }
            });

            input.addEventListener('blur', (e) => {
                const reg1 = /\s+/gi; //Несколько идущих подряд пробелов должны заменяться на один.
                const reg2 = /\-+/gi; //Несколько идущих подряд дефисов должны заменяться на один.
                const reg3 = /[-\s]+$/g;   //Пробелы и дефисы в конце значения должны удаляться.
                const reg4 = /^[-\s]+/g;   //Пробелы и дефисы в начале значения должны удаляться.
                const reg5 = /^[^A-ZА-ЯЁ]+[^a-zа-яё]*$/g; //Для поля type=text Первая буква каждого слова должна приводиться к верхнему регистру, а все остальные — к нижнему.
                const reg6 = /^8/g;//Должны удаляться все символы, кроме допустимых (н-р, удаляет 8 у номера телефона )
                e.target.value = e.target.value.replace(reg1, ' ');
                e.target.value = e.target.value.replace(reg2, '-');
                e.target.value = e.target.value.replace(reg3, '');
                e.target.value = e.target.value.replace(reg4, '');
                if (input.type === 'tel') {
                    e.target.value = e.target.value.replace(reg6, '');
                }
                if (input.type === 'text') {
                    let newValue = e.target.value.substr(0, 1).toUpperCase() + e.target.value.substr(1, e.target.value.length - 1).toLowerCase();
                    e.target.value = e.target.value.replace(reg5, newValue);
                }
            });

        });
    })
}
export default validate 