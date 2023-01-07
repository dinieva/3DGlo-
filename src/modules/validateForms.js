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
                };
            });
        });
    });
}
export default validate 