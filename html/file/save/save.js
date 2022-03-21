
import Client from '../../client/index.js';

window.fileSave = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let file = document.getElementById("file").value;
	let public = document.getElementById("public").value;
	let obj = new Object();
	obj.file = file;
	
	obj.public = public;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
