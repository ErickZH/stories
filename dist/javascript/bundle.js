/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ".";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_app_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_app_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_sliderDOM__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__menu__);






if (navigator.serviceWorker)
    navigator.serviceWorker.register('../sw.js')


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slider__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preloader_preloader__ = __webpack_require__(5);




let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubTitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#slider-image");
let textContent = document.querySelector("#slider-text-content");

let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

let slider = new __WEBPACK_IMPORTED_MODULE_0__slider__["a" /* default */]({
	elements: __WEBPACK_IMPORTED_MODULE_1__elements__["a" /* default */],
	animationFunc: function(element) 
	{
		textContent.classList.add("hide");
		sliderImage.classList.add("hide");

		setTimeout(function(){
			sliderTitle.innerHTML = element.title;
			sliderSubTitle.innerHTML = element.subtitle;
			sliderText.innerHTML = element.text;
			sliderImage.src = element.image;

			textContent.classList.remove("hide");
			sliderImage.classList.remove("hide");
		}, 600);		
	},
	speed: 5000
});

slider.play();

leftArrow.addEventListener('click', slider.prev);
rightArrow.addEventListener('click', slider.next);

const imagePaths = __WEBPACK_IMPORTED_MODULE_1__elements__["a" /* default */].map(el => el.image);

__WEBPACK_IMPORTED_MODULE_2__preloader_preloader__["a" /* default */].preloadImages({
	images: imagePaths,
	completed: function () {
		document.querySelector('.controls').style.display = "block";
	}
})

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Slider {
    constructor({elements, animationFunc, speed}) {
        this.elements = elements;
        this.animationFunc = animationFunc;

        this.index = 0;
        this.size = elements.length;

        this.speed = speed;

        this.innerNext = this.innerNext.bind(this);
        this.stop = this.stop.bind(this);

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    innerNext() {
        this.index++;
        if (this.index >= this.size) this.index = 0;

        this.animationFunc(this.elements[this.index]);
    }

    innerPrev() {
        this.index--;
        if (this.index < 0) this.index = this.size - 1;

        this.animationFunc(this.elements[this.index]);
    }

    next() {
        this.innerNext();

        if (this.interval) 
        {
            this.stop();
            this.play();
        }
    }

    prev() {
        this.innerPrev();

        if (this.interval) 
        {
            this.stop();
            this.play();
        }
    }

    play() {
        this.interval = setInterval(this.innerNext , this.speed);
    }

    stop() {
        clearInterval(this.interval);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Slider;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const elements = [
	{
		title: 'Laravel Básico',
		subtitle: 'Laravel',
		image: '../public/images/6.jpg',
		text: 'Aprende a dominar el Framework Web #1 de PHP'
	},
	{
		title: 'Roles y permisos en Laravel',
		subtitle: 'Laravel',
		image: '../public/images/5.jpg',
		text: 'Lleva tu aplicación Laravel a otro nivel'
	},
	{
		title: 'GUI con FXRuby',
		subtitle: 'Ruby',
		image: '../public/images/4.jpg',
		text: 'Crea interfaces graficas en Ruby'
	},
	{
		title: 'Git',
		subtitle: 'Herramientas',
		image: '../public/images/1.jpg',
		text: 'Aprende el sistema de versionamiento más utilizado por los Desarrolladores'
	},
	{
		title: 'Compilador en Ruby',
		subtitle: 'Ruby',
		image: '../public/images/2.jpg',
		text: 'Crea un compilidor con Ruby'
	}
];

/* harmony default export */ __webpack_exports__["a"] = (elements);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Preloader {
	static preloadImages({images, completed}) {
		const promises = images.map(imagePath => Preloader.preloadImage({imagePath}));

		Promise.all(promises).then(completed);
	}

	static preloadImage({imagePath}) {
		return new Promise ((res, rej) => {
			let image = new Image();
			image.src = imagePath;
			image.onload = res;
		})
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Preloader;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

function scrollToElement(element)
{
	window.scrollTo({
		'behavior': 'smooth',
		'top': element.offsetTop
	});
}

document.querySelector('.menu')
	.addEventListener('click', function() {
		document.querySelector('.menu-screen').classList.add('active');
	});

document.querySelector('.close')
	.addEventListener('click', function() {
		document.querySelector('.menu-screen').classList.remove('active');
	});

let links = document.querySelectorAll('.menu-screen a');

links.forEach(link => {
	link.addEventListener('click', function(ev) {
		document.querySelector('.menu-screen').classList.remove('active');

		let paths = this.href.split('/');

		const selector = paths[paths.length - 1];

		if (window.scrollTo) ev.preventDefault();

		scrollToElement(document.querySelector(selector));

		return !!window.scrollTo;
	})
});


/***/ })
/******/ ]);