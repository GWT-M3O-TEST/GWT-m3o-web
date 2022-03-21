
import Client from '../../client/index.js';

window.mqPublish = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let message = document.getElementById("message").value;
	let topic = document.getElementById("topic").value;
	let obj = new Object();
	obj.message = message;
	
	obj.topic = topic;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
