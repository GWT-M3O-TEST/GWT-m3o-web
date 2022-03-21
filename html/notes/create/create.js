
import Client from '../../client/index.js';

window.notesCreate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let text = document.getElementById("text").value;
	let title = document.getElementById("title").value;
	let obj = new Object();
	obj.text = text;
	
	obj.title = title;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
