//файл с точками входа для импорта 
import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import nextSlide from './modules/nextSlide'
import calc from './modules/calc'
import validate from './modules/validateForms'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calculator from './modules/calculator'
import sendForm from './modules/sendForm'
import { swiperSliderFunc } from './modules/swiperSlider'

timer('29 january 2023')
menu()
modal()
nextSlide()
calc()
validate()
tabs()
slider()
calculator(100)
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ],
})

sendForm({
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ],
})

sendForm({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ],
})

swiperSliderFunc()