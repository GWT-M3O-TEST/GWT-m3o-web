
import Client from '../../client/index.js';

window.geocodingReverse = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let latitude = document.getElementById("latitude").value;
	let longitude = document.getElementById("longitude").value;
	let obj = new Object();
	obj.latitude = latitude;
	
	obj.longitude = longitude;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
