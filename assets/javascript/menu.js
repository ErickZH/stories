function scrollToElement(element) 
{
	window.scrollTo({
		'behavior': 'smooth',
		'top': 1000
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

let links = document.querySelectorAll('.menu-screen');

links.forEach(link => {
	link.addEventListener('click', function(env) {
		document.querySelector('.menu-screen').classList.remove('active');
	})
});