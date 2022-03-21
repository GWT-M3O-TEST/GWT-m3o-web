
import Client from '../../client/index.js';

window.smsSend = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let from = document.getElementById("from").value;
	let message = document.getElementById("message").value;
	let to = document.getElementById("to").value;
	let obj = new Object();
	obj.from = from;
	
	obj.message = message;
	
	obj.to = to;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
