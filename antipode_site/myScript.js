function convertAntiPode(lat, long) {
	// antiPodeLat: lat * opposite
	// antiPodeLong: (180 - abs(long)) * opposite
	
	let antiPodeLat = (lat * -1);
	let antiPodeLong = (180 - Math.abs(long));

	document.getElementById('currentLat').innerHTML = 'Current Lat: ' + lat;
	document.getElementById('currentLong').innerHTML = 'Current Long: ' + long;
	document.getElementById('antiPodeLat').innerHTML = 'AntiPodal Lat: ' + antiPodeLat;
	document.getElementById('antiPodeLong').innerHTML = 'antiPode Long: ' + antiPodeLong;

	window.open('https://www.google.com/maps/@'+antiPodeLat+','+antiPodeLong+',4z', '_blank');

	//let newLink = document.createElement("a");
	//let newContent = document.createTextNode("follow link"); 
	//newLink.appendChild(newContent); 

	//let currentEl = document.getElementById("antiPodeLong");
	//document.body.insertBefore(newLink, currentEl.nextSibling);
	//newLink.href = 'https://www.google.com/maps/@'+antiPodeLat+','+antiPodeLong+',6z';
	//newLink.target = "_blank"
	//document.getElementById('map_link').href = 'https://www.google.com/maps/@'+antiPodeLat+','+antiPodeLong+',4z';
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