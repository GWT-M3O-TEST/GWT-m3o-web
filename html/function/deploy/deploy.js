
import Client from '../../client/index.js';

window.functionDeploy = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let branch = document.getElementById("branch").value;
	let entrypoint = document.getElementById("entrypoint").value;
	let env_vars = document.getElementById("env_vars").value;
	let name = document.getElementById("name").value;
	let region = document.getElementById("region").value;
	let repo = document.getElementById("repo").value;
	let runtime = document.getElementById("runtime").value;
	let source = document.getElementById("source").value;
	let subfolder = document.getElementById("subfolder").value;
	let obj = new Object();
	obj.branch = branch;
	
	obj.entrypoint = entrypoint;
	
	obj.env_vars = env_vars;
	
	obj.name = name;
	
	obj.region = region;
	
	obj.repo = repo;
	
	obj.runtime = runtime;
	
	obj.source = source;
	
	obj.subfolder = subfolder;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
