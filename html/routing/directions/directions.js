
import Client from '../../client/index.js';

window.routingDirections = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let destination = document.getElementById("destination").value;
	let origin = document.getElementById("origin").value;
	let obj = new Object();
	obj.destination = destination;
	
	obj.origin = origin;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
