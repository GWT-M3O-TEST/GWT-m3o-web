
import Client from '../../client/index.js';

window.prayerTimes = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let date = document.getElementById("date").value;
	let days = document.getElementById("days").value;
	let latitude = document.getElementById("latitude").value;
	let location = document.getElementById("location").value;
	let longitude = document.getElementById("longitude").value;
	let obj = new Object();
	obj.date = date;
	
	obj.days = days;
	
	obj.latitude = latitude;
	
	obj.location = location;
	
	obj.longitude = longitude;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
