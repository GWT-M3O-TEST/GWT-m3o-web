
import Client from '../../client/index.js';

window.chatCreate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let description = document.getElementById("description").value;
	let name = document.getElementById("name").value;
	let private = document.getElementById("private").value;
	let user_ids = document.getElementById("user_ids").value;
	let obj = new Object();
	obj.description = description;
	
	obj.name = name;
	
	obj.private = private;
	
	obj.user_ids = user_ids;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
