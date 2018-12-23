function convertAntiPode(lat, long) {
	let antiPodeLat = (lat * -1);
	let antiPodeLong;

	if (long > 0) {
		antiPodeLong = (long - 180);
	} else {
		antiPodeLong = (long + 180);
	}

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

function inputCityState() {
	L.mapbox.accessToken = 'pk.eyJ1IjoiYmFzc2VoZXMiLCJhIjoiY2pxMDZhNWR6MDdyNzN3bzY5Ym1hMHpzYiJ9.IxafqRoU96Jywsql6Kb3_Q';
	let geocoder = L.mapbox.geocoder('mapbox.places')
	let city = document.getElementById('cityState').value;
	geocoder.query(city, showMap);
	console.log(city);
}

function showMap(err, data) {
	convertAntiPode(data.latlng[0], data.latlng[1]);
}

let btn = document.getElementById('mybutton');
btn.addEventListener('click', findGPS);

let cityState = document.getElementById('cityStateButton');
cityState.addEventListener('click', inputCityState);
