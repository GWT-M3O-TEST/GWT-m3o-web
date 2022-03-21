
import Client from '../../client/index.js';

window.functionCall = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let name = document.getElementById("name").value;
	let request = document.getElementById("request").value;
	let obj = new Object();
	obj.name = name;
	
	obj.request = request;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
