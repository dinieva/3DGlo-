/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_nextSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/nextSlide */ \"./src/modules/nextSlide.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_validateForms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validateForms */ \"./src/modules/validateForms.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n//файл с точками входа для импорта \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('29 january 2023')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_nextSlide__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_validateForms__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(100)\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\r\n    formId: 'form1',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'total'\r\n        }\r\n    ],\r\n})\r\n\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\r\n    formId: 'form2',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'total'\r\n        }\r\n    ],\r\n})\r\n\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\r\n    formId: 'form3',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'total'\r\n        }\r\n    ],\r\n})\r\n\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n    const calcBlock = document.querySelector('.calc-block')\r\n    const calcBlockInputs = calcBlock.querySelectorAll('input')\r\n\r\n    calcBlockInputs.forEach(function (input) {\r\n        input.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D/g, '');\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst calc = (price = 100) => { //(price = 100) - значение по умолчанию\r\n    console.log('calc');\r\n\r\n    const calcBlock = document.querySelector('.calc-block')\r\n    const calcType = document.querySelector('.calc-type')\r\n    const calcSquare = document.querySelector('.calc-square')\r\n    const calcCount = document.querySelector('.calc-count')\r\n    const calcDay = document.querySelector('.calc-day')\r\n    const total = document.getElementById('total')\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n        const calcSquareValue = calcSquare.value\r\n\r\n        let totalValue = 0\r\n        let calcCountValue = 1\r\n        let calcDayValue = 1\r\n\r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10\r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 5) { // проверка на существование calcDay.value\r\n            calcDayValue = 2\r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5\r\n        }\r\n\r\n        if (calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue\r\n\r\n        } else {\r\n            totalValue = 0\r\n        }\r\n        console.log(totalValue);\r\n        //total.textContent = totalValue\r\n\r\n        // увеличение суммы методом requestAnimationFrame\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animateCalc)(value => {\r\n            total.textContent = Math.floor(value);\r\n        }, 0, totalValue, 1000);\r\n\r\n        // увеличение суммы методом setInterval\r\n        /*\r\n            const duration = 1000;\r\n            const step = 1;\r\n    \r\n            function changeSum(num, elem) {\r\n                let n = 0;\r\n                if (n < num) {\r\n                    //let t = Math.round(duration / (num / step));\r\n                    let t = duration / (num / step);\r\n                    let interval = setInterval(() => {\r\n                        n = n + step;\r\n                        if (n == num) {\r\n                            clearInterval(interval);\r\n                        }\r\n                        elem.textContent = n;\r\n                    }, t);\r\n                }\r\n            }\r\n            changeSum(totalValue, total);\r\n        */\r\n    }\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n            e.target === calcCount || e.target === calcDay) {\r\n            countCalc();\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"animateCalc\": () => (/* binding */ animateCalc),\n/* harmony export */   \"slicer\": () => (/* binding */ slicer)\n/* harmony export */ });\n// импортировать в нужный файл import { animate } from './helpers'\r\n\r\nconst slicer = (str, num) => {\r\n    console.log('helpers slicer')\r\n    return str.trim().length > num ? str.trim().substring(0, num) + '...' : str.trim()\r\n\r\n    console.log(slicer(text, 20))\r\n}\r\n\r\nconst animate = ({ timing, draw, duration }) => { // передается объект с настройками duration- длительность анимации\r\n    let start = performance.now(); //отработка метода, который возвращает время начала(старта) анимации на данный момент\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration; // (текущее время - время начала анимации) / продолжительность\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n}\r\n\r\nconst animateCalc = (callback, from, to, duration) => {\r\n    let start = null, // сохранить время начала\r\n        animate = timestamp => {\r\n            start = start || timestamp;\r\n            let progress = Math.min((timestamp - start) / duration, 1);\r\n            callback(progress * (to - from) + from);\r\n            if (progress < 1) {\r\n                window.requestAnimationFrame(animate);\r\n            }\r\n        };\r\n    window.requestAnimationFrame(animate);\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n\r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        const id = menuItem.getAttribute('href');\r\n        document.querySelector(id).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n        menu.classList.remove('active-menu');\r\n    }));\r\n\r\n    //делегирование toggleMenu()\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.menu')) {\r\n            menu.classList.add('active-menu');\r\n        } else if (!e.target.matches('.active-menu')) {\r\n            menu.classList.remove('active-menu');\r\n        }\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3dglo/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const modal = document.querySelector('.popup')\r\n    const closeBtn = modal.querySelector('.popup-close')\r\n\r\n\r\n    if (window.innerWidth >= '768') {\r\n        /* modal.style.cssText = `\r\n        display: flex;\r\n        visibility: hidden;\r\n        opacity: 0;\r\n        transition: opacity 300ms ease-in-out\r\n    `; */\r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                /* modal.style.visibility = 'visible';\r\n                modal.style.opacity = 1; */\r\n\r\n                setTimeout(() => {\r\n                    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                        duration: 1000,\r\n                        timing(timeFraction) {\r\n                            return 1 - Math.sin(Math.acos(timeFraction));\r\n                        },\r\n\r\n                        draw(progress) {\r\n                            modal.style.display = 'block';\r\n                        }\r\n                    });\r\n                }, 300);\r\n            });\r\n        });\r\n\r\n        closeBtn.addEventListener('click', () => {\r\n            /* modal.style.opacity = 0;\r\n            setTimeout(() => {\r\n                modal.style.visibility = 'hidden';\r\n            }, 300); */\r\n            setTimeout(() => {\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 100,\r\n                    timing(timeFraction) {\r\n                        return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        modal.style.display = 'none';\r\n                    }\r\n                });\r\n            }, 500);\r\n\r\n        });\r\n    } else if (window.innerWidth < '768') {\r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                modal.style.display = 'block';\r\n            });\r\n        });\r\n\r\n        /* closeBtn.addEventListener('click', () => {\r\n            modal.style.display = 'none';\r\n        }); */\r\n\r\n    }\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            modal.style.display = 'none';\r\n            console.log(e.target);\r\n        }\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/nextSlide.js":
/*!**********************************!*\
  !*** ./src/modules/nextSlide.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst nextSlide = () => {\r\n    let link = document.querySelector('a[href = \"#service-block\"]');\r\n\r\n    link.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        const id = link.getAttribute('href');\r\n        document.querySelector(id).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n    });\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nextSlide);\n\n//# sourceURL=webpack://3dglo/./src/modules/nextSlide.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n    const form = document.getElementById(formId);\r\n    const statusBlock = document.createElement('div');\r\n    const loadText = 'Загрузка';\r\n    const errorText = 'Ошибка';\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется';\r\n\r\n    const validate = (list) => {\r\n        let success;\r\n\r\n        list.forEach(input => {\r\n            if (!input.classList.contains('success')) {\r\n                success = false\r\n            } else {\r\n                success = true\r\n            }\r\n        })\r\n\r\n        return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input')\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n        const preloader = document.createElement(\"IMG\");\r\n        preloader.src = 'https://i.gifer.com/1V7X.gif';\r\n        const popup = document.querySelector('.popup');\r\n\r\n        //statusBlock.textContent = loadText\r\n\r\n        form.append(preloader)\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        })\r\n\r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id)\r\n\r\n            if (elem.type === 'block') {\r\n                formBody[elem.id] = element.textContent;\r\n            } else if (elem.type === 'input') {\r\n                formBody[elem.id] = element.value;\r\n            }\r\n        })\r\n\r\n        if (validate(formElements)) {\r\n            sendData(formBody)\r\n                .then(data => {\r\n                    preloader.style.display = 'none'\r\n                    statusBlock.textContent = successText\r\n                    popup.style.display = 'none'\r\n\r\n                    formElements.forEach(input => {\r\n                        input.value = ''\r\n                    })\r\n                })\r\n                .catch(error => {\r\n                    preloader.style.display = 'none'\r\n                    statusBlock.textContent = errorText\r\n                })\r\n        } else {\r\n            preloader.style.display = 'none'\r\n            alert('Данные не валидны!!!')\r\n        }\r\n    }\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error('Верните форму на место, пожалуйста')\r\n        }\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault()\r\n\r\n            submitForm()\r\n        })\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    console.log('slider');\r\n    const sliderBlock = document.querySelector('.portfolio-content');\r\n    const slides = document.querySelectorAll('.portfolio-item');\r\n    let dotsBlock = document.querySelector('.portfolio-dots');\r\n    let dots = document.querySelectorAll('.dot');\r\n    const timeInterval = 2000;\r\n\r\n    let currentSlide = 0;\r\n\r\n    let interval;\r\n\r\n    //Удалить все элементы со страницы с классом dot (из верстки Index.html)\r\n    const clearDotsBlock = () => {\r\n        //---- 1 способ ----\r\n        dotsBlock.innerHTML = ' ';\r\n        //---- 2 способ ----\r\n        /* while (dotsBlock.firstChild) {\r\n            dotsBlock.removeChild(dotsBlock.lastChild)\r\n        } */\r\n        //---- 3 способ ----\r\n        //dotsBlock.replaceChildren();\r\n        //---- 4 способ ----\r\n        /* dots.forEach((dot, index) => {\r\n            dotsBlock.remove(dots[index]);\r\n        }) */\r\n    }\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass)\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass)\r\n    }\r\n\r\n    const checkDots = (index) => {\r\n        dotsBlock.append(dots[index])\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n        currentSlide++\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n            dotsBlock.innerHTML = ' '\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n        checkDots(currentSlide)\r\n    }\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer)\r\n    }\r\n\r\n    const stoptSlide = () => {\r\n        clearInterval(interval)\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return\r\n        }\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++\r\n\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--\r\n            dots[currentSlide + 1].remove();\r\n            if (dotsBlock.children.length == 0) {\r\n                console.log('oops');\r\n                dotsBlock.append(dots[0])\r\n                dotsBlock.append(dots[1])\r\n                dotsBlock.append(dots[2])\r\n                dotsBlock.append(dots[3])\r\n                dotsBlock.append(dots[4])\r\n                dotsBlock.append(dots[5])\r\n            }\r\n            console.log(dotsBlock.children.length);\r\n\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index\r\n                }\r\n            })\r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n            dotsBlock.innerHTML = ' '\r\n        }\r\n\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n        checkDots(currentSlide)\r\n    })\r\n\r\n    //останавливаем таймер при наведении курсора на стрелки и переключатели \r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stoptSlide()\r\n        }\r\n    }, true)\r\n\r\n    //запускаем таймер при наведении курсора на стрелки и переключатели \r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(timeInterval)\r\n        }\r\n    }, true)\r\n\r\n    startSlide(timeInterval) //запускаем таймер\r\n    console.dir(dotsBlock);\r\n    clearDotsBlock()// удаляем пагинацию из блока\r\n    checkDots(currentSlide)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    console.log('tabs');\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n                }\r\n            });\r\n        };\r\n\r\n\r\n    });\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let hours = Math.floor(timeRemaining / 60 / 60);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { timeRemaining, hours, minutes, seconds }\r\n    };\r\n\r\n    let addZero = function (num) {\r\n        if (num < 10) {\r\n            return '0' + num;\r\n        }\r\n        return num;\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        getTime.hours = addZero(getTime.hours);\r\n        getTime.minutes = addZero(getTime.minutes);\r\n        getTime.seconds = addZero(getTime.seconds);\r\n        if (getTime.timeRemaining > 0) {\r\n            timerHours.textContent = getTime.hours;\r\n            timerMinutes.textContent = getTime.minutes;\r\n            timerSeconds.textContent = getTime.seconds;\r\n        }\r\n    };\r\n\r\n    setInterval(updateClock, 1000);\r\n\r\n\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://3dglo/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/validateForms.js":
/*!**************************************!*\
  !*** ./src/modules/validateForms.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\r\n    console.log('validate');\r\n    const forms = document.querySelectorAll('form');\r\n\r\n    forms.forEach(function (form) {\r\n        const inputs = form.querySelectorAll('input');\r\n        inputs.forEach(function (input) {\r\n            input.addEventListener('input', (e) => {\r\n                if (e.target.type === 'text') {\r\n                    //только кириллицы в любом регистре, дефиса и пробела.\r\n                    e.target.value = e.target.value.replace(/[^а-яё\\-\\s]$/i, '');\r\n                }\r\n\r\n                if (e.target.type === 'email') {\r\n                    //только латиницы в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * '\r\n                    //e.target.value = e.target.value.replace(/[а-яё\\)\\(\\s\\?\\&\\:\\%\\;\\$\\#\\+\\^\"]/gi, '');\r\n                    e.target.value = e.target.value.replace(/[^\\w\\@\\-\\.\\!\\~\\*\\']/gi, '');\r\n                    ///[^a-z0-9\\-\\@\\_\\.\\!\\~\\*\\']$/i\r\n                }\r\n                if (e.target.type === 'tel') {\r\n                    // ввод только цифр, круглых скобок и дефис\r\n                    e.target.value = e.target.value.replace(/[^\\d\\(\\)\\-]/g, '');\r\n                }\r\n            });\r\n            //валидацию данных при отправке задание урок27 п.3\r\n            input.addEventListener('input', (e) => {\r\n                if (e.target.name == \"user_phone\") {\r\n                    if (/^[+\\-()0-9\\s]+$/g.test(input.value)) {\r\n                        e.target.classList.add('success')\r\n                    }\r\n                    console.log(e.target.classList.contains('success'));\r\n                }\r\n\r\n                if (e.target.name == 'user_email') {\r\n                    if (/^[@?!~,.\\w]+$/gi.test(input.value)) {\r\n                        e.target.classList.add('success')\r\n                    }\r\n                    console.log(e.target.classList.contains('success'));\r\n                }\r\n\r\n                if (e.target.name == \"user_name\") {\r\n                    if (/^[А-ЯЁ\\s]+$/gi.test(input.value)) {\r\n                        e.target.classList.add('success')\r\n                    }\r\n                    console.log(e.target.classList.contains('success'));\r\n                }\r\n\r\n                if (e.target.name == \"user_message\") {\r\n                    if (/^[?!,.а-яА-ЯёЁ0-9\\s]+$/g.test(input.value)) {\r\n                        e.target.classList.add('success')\r\n                    }\r\n                    console.log(e.target.classList.contains('success'));\r\n                }\r\n            });\r\n\r\n            input.addEventListener('blur', (e) => {\r\n                const reg1 = /\\s+/gi; //Несколько идущих подряд пробелов должны заменяться на один.\r\n                const reg2 = /\\-+/gi; //Несколько идущих подряд дефисов должны заменяться на один.\r\n                const reg3 = /[-\\s]+$/g;   //Пробелы и дефисы в конце значения должны удаляться.\r\n                const reg4 = /^[-\\s]+/g;   //Пробелы и дефисы в начале значения должны удаляться.\r\n                const reg5 = /^[^A-ZА-ЯЁ]+[^a-zа-яё]*$/g; //Для поля type=text Первая буква каждого слова должна приводиться к верхнему регистру, а все остальные — к нижнему.\r\n                const reg6 = /^8/g;//Должны удаляться все символы, кроме допустимых (н-р, удаляет 8 у номера телефона )\r\n                e.target.value = e.target.value.replace(reg1, ' ');\r\n                e.target.value = e.target.value.replace(reg2, '-');\r\n                e.target.value = e.target.value.replace(reg3, '');\r\n                e.target.value = e.target.value.replace(reg4, '');\r\n                if (input.type === 'tel') {\r\n                    e.target.value = e.target.value.replace(reg6, '');\r\n                }\r\n                if (input.type === 'text') {\r\n                    let newValue = e.target.value.substr(0, 1).toUpperCase() + e.target.value.substr(1, e.target.value.length - 1).toLowerCase();\r\n                    e.target.value = e.target.value.replace(reg5, newValue);\r\n                }\r\n            });\r\n\r\n        });\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate); \n\n//# sourceURL=webpack://3dglo/./src/modules/validateForms.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;