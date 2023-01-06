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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_nextSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/nextSlide */ \"./src/modules/nextSlide.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_validateForms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validateForms */ \"./src/modules/validateForms.js\");\n//файл с точками входа для импорта \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('29 january 2023')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_nextSlide__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_validateForms__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n\r\n\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n    const calcBlock = document.querySelector('.calc-block')\r\n    const calcBlockInputs = calcBlock.querySelectorAll('input')\r\n\r\n    calcBlockInputs.forEach(function (input) {\r\n        input.addEventListener('input', (e) => {\r\n            //let isError = false;\r\n            if (!/[^\\d]/g.test(e.target.value) && e.target.value !== '') {\r\n                console.log('isError = false');\r\n            } else {\r\n                //isError = true;\r\n                e.target.setCustomValidity('Введите число.');\r\n                e.target.reportValidity();\r\n            }\r\n        });\r\n    })\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = menu.querySelector('.close-btn')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n    const handleMenu = () => {\r\n        /* if (!menu.style.transform) {\r\n            menu.style.transform = `translateX(0)`\r\n        } else {\r\n            menu.style.transform = ``\r\n        } */\r\n\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n    menuBtn.addEventListener('click', handleMenu);\r\n    closeBtn.addEventListener('click', handleMenu);\r\n\r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        const id = menuItem.getAttribute('href');\r\n        document.querySelector(id).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n        handleMenu();\r\n    }));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3dglo/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const modal = document.querySelector('.popup')\r\n    const closeBtn = modal.querySelector('.popup-close')\r\n\r\n    if (window.innerWidth >= '768') {\r\n        modal.style.cssText = `\r\n        display: flex;\r\n        visibility: hidden;\r\n        opacity: 0;\r\n        transition: opacity 300ms ease-in-out\r\n    `;\r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                modal.style.visibility = 'visible';\r\n                modal.style.opacity = 1;\r\n            });\r\n        });\r\n\r\n        closeBtn.addEventListener('click', () => {\r\n            modal.style.opacity = 0;\r\n            setTimeout(() => {\r\n                modal.style.visibility = 'hidden';\r\n            }, 300);\r\n        });\r\n    } else if (window.innerWidth < '768') {\r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                modal.style.display = 'block';\r\n            });\r\n        });\r\n\r\n        closeBtn.addEventListener('click', () => {\r\n            modal.style.display = 'none';\r\n        });\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/nextSlide.js":
/*!**********************************!*\
  !*** ./src/modules/nextSlide.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst nextSlide = () => {\r\n    let link = document.querySelector('a[href = \"#service-block\"]');\r\n\r\n    link.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        const id = link.getAttribute('href');\r\n        document.querySelector(id).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n    });\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nextSlide);\n\n//# sourceURL=webpack://3dglo/./src/modules/nextSlide.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\r\n    console.log('validate');\r\n    const forms = document.querySelectorAll('form');\r\n\r\n    forms.forEach(function (form) {\r\n        const inputs = form.querySelectorAll('input');\r\n        inputs.forEach(function (input) {\r\n            input.addEventListener('input', (e) => {\r\n                if (e.target.type === 'text') {\r\n                    //только кириллицы в любом регистре, дефиса и пробела.\r\n                    const reg = /[а-яё\\-\\s]$/i;\r\n                    const text = e.target.value;\r\n                    console.log(reg.test(text));\r\n                }\r\n\r\n                if (e.target.type === 'email') {\r\n                    //только латиницы в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * '\r\n                    const email = e.target.value;\r\n                    const reg = /^[\\w]{1}[\\w-\\.-!~*']*@[\\w-]+\\.[a-z]{2,4}$/i;\r\n                    console.log(reg.test(email));\r\n                }\r\n\r\n                if (e.target.type === 'tel') {\r\n                    // ввод только цифр, круглых скобок и дефис\r\n                    const reg = /^[\\d\\+][\\d\\(\\)\\-]*\\d$/;\r\n                    console.log(reg.test(e.target.value));\r\n                }\r\n\r\n            });\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate); \n\n//# sourceURL=webpack://3dglo/./src/modules/validateForms.js?");

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