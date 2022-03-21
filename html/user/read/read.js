
import Client from '../../client/index.js';

window.userRead = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let email = document.getElementById("email").value;
	let id = document.getElementById("id").value;
	let username = document.getElementById("username").value;
	let obj = new Object();
	obj.email = email;
	
	obj.id = id;
	
	obj.username = username;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
