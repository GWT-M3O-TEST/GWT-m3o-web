
import Client from '../../client/index.js';

window.weatherForecast = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let days = document.getElementById("days").value;
	let location = document.getElementById("location").value;
	let obj = new Object();
	obj.days = days;
	
	obj.location = location;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
