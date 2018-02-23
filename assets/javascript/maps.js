import styles = from './maps/style';

function initMap() 
{
	const coords = {
		lat: 19.365596,
		lng: -99.264305
	};

	let map = new google.maps.Map(document.getElementById('mapa'), {
		center: coords,
		zoom: 16,
	});

	let marker = new google.maps.Marker({
		position: coords,
		map,
		title: 'Programación JJE'
	});
}

initMap();