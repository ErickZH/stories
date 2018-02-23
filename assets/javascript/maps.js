function initMap() 
{
	let map = new google.maps.Map(document.getElementById('mapa'), {
		center: {
			lat: 19.365596,
			lng: -99.264305
		},
		zoom: 16,

	});
}

initMap();