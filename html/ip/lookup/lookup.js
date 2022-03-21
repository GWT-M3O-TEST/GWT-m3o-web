
import Client from '../../client/index.js';

window.ipLookup = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let ip = document.getElementById("ip").value;
	let obj = new Object();
	obj.ip = ip;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
