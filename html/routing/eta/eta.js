
import Client from '../../client/index.js';

window.routingEta = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let destination = document.getElementById("destination").value;
	let origin = document.getElementById("origin").value;
	let speed = document.getElementById("speed").value;
	let type = document.getElementById("type").value;
	let obj = new Object();
	obj.destination = destination;
	
	obj.origin = origin;
	
	obj.speed = speed;
	
	obj.type = type;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
