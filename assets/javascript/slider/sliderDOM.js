import Slider from './slider';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubTitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#slider-image");



let slider = new Slider({
	elements: [
	{
		title: 'Title course',
		subtitle: 'Description',
		image: '../public/images/6.jpg',
		text: 'Total number of videos'
	},
	{
		title: 'Title course 2',
		subtitle: 'Description 2',
		image: '../public/images/5.jpg',
		text: 'Total number of videos 2'
	},
	{
		title: 'Title course 3',
		subtitle: 'Description 3',
		image: '../public/images/4.jpg',
		text: 'Total number of videos 3'
	},
	{
		title: 'Title course 4',
		subtitle: 'Description 4',
		image: '../public/images/1.jpg',
		text: 'Total number of videos 4'
	},
	{
		title: 'Title course 5',
		subtitle: 'Description 5',
		image: '../public/images/2.jpg',
		text: 'Total number of videos 5'
	}
	],
	animationFunc: function(element) 
	{
		sliderTitle.innerHTML = element.title;
		sliderSubTitle.innerHTML = element.subtitle;
		sliderText.innerHTML = element.text;
		sliderImage.src = element.image;
	},
	speed: 3000
});

slider.play();