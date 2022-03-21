
import Client from '../../client/index.js';

window.userLogin = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let username = document.getElementById("username").value;
	let obj = new Object();
	obj.email = email;
	
	obj.password = password;
	
	obj.username = username;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
