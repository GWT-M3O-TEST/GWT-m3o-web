
import Client from '../../client/index.js';

window.appLogs = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let logs_type = document.getElementById("logs_type").value;
	let name = document.getElementById("name").value;
	let obj = new Object();
	obj.logs_type = logs_type;
	
	obj.name = name;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
