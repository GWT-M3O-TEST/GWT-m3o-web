
import Client from '../../client/index.js';

window.userCreate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let email = document.getElementById("email").value;
	let id = document.getElementById("id").value;
	let password = document.getElementById("password").value;
	let profile = document.getElementById("profile").value;
	let username = document.getElementById("username").value;
	let obj = new Object();
	obj.email = email;
	
	obj.id = id;
	
	obj.password = password;
	
	obj.profile = profile;
	
	obj.username = username;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
