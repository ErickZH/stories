import '../css/app.scss';

import './slider/sliderDOM';

document.querySelector('.menu')
	.addEventListener('click', function() {
		document.querySelector('.menu-screen').classList.add('active');
	});

document.querySelector('.close')
	.addEventListener('click', function() {
		document.querySelector('.menu-screen').classList.remove('active');
	});