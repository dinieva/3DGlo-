const validate = () => {
    console.log('validate');
    const forms = document.querySelectorAll('form');

    forms.forEach(function (form) {
        const inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.addEventListener('input', (e) => {
                if (e.target.type === 'text') {
                    //только кириллицы в любом регистре, дефиса и пробела.
                    const reg = /[а-яё\-\s]$/i;
                    const text = e.target.value;
                    console.log(reg.test(text));
                }

                if (e.target.type === 'email') {
                    //только латиницы в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * '
                    const email = e.target.value;
                    const reg = /^[\w]{1}[\w-\.-!~*']*@[\w-]+\.[a-z]{2,4}$/i;
                    console.log(reg.test(email));
                }

                if (e.target.type === 'tel') {
                    // ввод только цифр, круглых скобок и дефис
                    const reg = /^[\d\+][\d\(\)\-]*\d$/;
                    console.log(reg.test(e.target.value));
                }

            });
        });
    });
};

export default validate 