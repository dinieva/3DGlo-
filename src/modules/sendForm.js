const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка';
    const errorText = 'Ошибка';
    const successText = 'Спасибо! Наш менеджер с вами свяжется';

    const validate = (list) => {
        let success;

        list.forEach(input => {
            if (!input.classList.contains('success')) {
                success = false
            } else {
                success = true
            }
        })

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}
        const preloader = document.createElement("IMG");
        preloader.src = 'https://i.gifer.com/1V7X.gif';
        const popup = document.querySelector('.popup');

        //statusBlock.textContent = loadText

        form.append(preloader)
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    preloader.style.display = 'none'
                    statusBlock.textContent = successText
                    popup.style.display = 'none'

                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    preloader.style.display = 'none'
                    statusBlock.textContent = errorText
                })
        } else {
            preloader.style.display = 'none'
            alert('Данные не валидны!!!')
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            submitForm()
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default sendForm