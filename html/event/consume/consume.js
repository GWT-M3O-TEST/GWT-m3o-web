
import Client from '../../client/index.js';

window.eventConsume = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let group = document.getElementById("group").value;
	let offset = document.getElementById("offset").value;
	let topic = document.getElementById("topic").value;
	let obj = new Object();
	obj.group = group;
	
	obj.offset = offset;
	
	obj.topic = topic;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
