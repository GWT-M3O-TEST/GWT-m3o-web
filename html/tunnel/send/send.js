
import Client from '../../client/index.js';

window.tunnelSend = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let body = document.getElementById("body").value;
	let headers = document.getElementById("headers").value;
	let host = document.getElementById("host").value;
	let method = document.getElementById("method").value;
	let params = document.getElementById("params").value;
	let path = document.getElementById("path").value;
	let url = document.getElementById("url").value;
	let obj = new Object();
	obj.body = body;
	
	obj.headers = headers;
	
	obj.host = host;
	
	obj.method = method;
	
	obj.params = params;
	
	obj.path = path;
	
	obj.url = url;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
