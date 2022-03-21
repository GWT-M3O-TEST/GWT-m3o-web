
import Client from '../../client/index.js';

window.appUpdate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let env_vars = document.getElementById("env_vars").value;
	let name = document.getElementById("name").value;
	let obj = new Object();
	obj.env_vars = env_vars;
	
	obj.name = name;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
