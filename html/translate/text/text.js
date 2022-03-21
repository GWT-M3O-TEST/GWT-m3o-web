
import Client from '../../client/index.js';

window.translateText = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let content = document.getElementById("content").value;
	let format = document.getElementById("format").value;
	let model = document.getElementById("model").value;
	let source = document.getElementById("source").value;
	let target = document.getElementById("target").value;
	let obj = new Object();
	obj.content = content;
	
	obj.format = format;
	
	obj.model = model;
	
	obj.source = source;
	
	obj.target = target;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
