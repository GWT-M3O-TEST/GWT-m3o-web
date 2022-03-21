
import Client from '../../client/index.js';

window.appRun = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let branch = document.getElementById("branch").value;
	let env_vars = document.getElementById("env_vars").value;
	let name = document.getElementById("name").value;
	let port = document.getElementById("port").value;
	let region = document.getElementById("region").value;
	let repo = document.getElementById("repo").value;
	let obj = new Object();
	obj.branch = branch;
	
	obj.env_vars = env_vars;
	
	obj.name = name;
	
	obj.port = port;
	
	obj.region = region;
	
	obj.repo = repo;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
