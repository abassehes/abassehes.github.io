function convertAntiPode(lat, long) {
	// antiPodeLat: lat * opposite
	// antiPodeLong: (180 - abs(long)) * opposite

	let antiPodeLat = (lat * -1);
	let antiPodeLong = (180 - Math.abs(long));

	mapboxgl.accessToken = 'pk.eyJ1IjoiYmFzc2VoZXMiLCJhIjoiY2pwaHA0eDE4MHl2ZTN3bXBpeXJwb3lnZyJ9.VVk0qC0658u4H0W2ZzScbw';
	
	let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v10',
	center: [antiPodeLong, antiPodeLat],
	zoom: 3
	});
}

function findGPS() {
	navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(p) {
	let lat = p.coords.latitude;
	let long = p.coords.longitude;

	convertAntiPode(lat, long);
}

let btn = document.getElementById('mybutton');
btn.addEventListener('click', findGPS);