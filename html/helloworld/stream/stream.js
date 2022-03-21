
import Client from '../../client/index.js';

window.helloworldStream = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let messages = document.getElementById("messages").value;
	let name = document.getElementById("name").value;
	let obj = new Object();
	obj.messages = messages;
	
	obj.name = name;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
