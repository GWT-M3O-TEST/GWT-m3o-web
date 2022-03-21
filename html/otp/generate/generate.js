
import Client from '../../client/index.js';

window.otpGenerate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let expiry = document.getElementById("expiry").value;
	let id = document.getElementById("id").value;
	let size = document.getElementById("size").value;
	let obj = new Object();
	obj.expiry = expiry;
	
	obj.id = id;
	
	obj.size = size;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
