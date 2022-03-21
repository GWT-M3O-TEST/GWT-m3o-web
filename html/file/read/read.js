
import Client from '../../client/index.js';

window.fileRead = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let path = document.getElementById("path").value;
	let project = document.getElementById("project").value;
	let obj = new Object();
	obj.path = path;
	
	obj.project = project;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
