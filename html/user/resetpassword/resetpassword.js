
import Client from '../../client/index.js';

window.userResetPassword = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let code = document.getElementById("code").value;
	let confirm_password = document.getElementById("confirm_password").value;
	let email = document.getElementById("email").value;
	let new_password = document.getElementById("new_password").value;
	let obj = new Object();
	obj.code = code;
	
	obj.confirm_password = confirm_password;
	
	obj.email = email;
	
	obj.new_password = new_password;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
