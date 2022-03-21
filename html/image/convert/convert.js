
import Client from '../../client/index.js';

window.imageConvert = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let base64 = document.getElementById("base64").value;
	let file = document.getElementById("file").value;
	let name = document.getElementById("name").value;
	let outputURL = document.getElementById("outputURL").value;
	let url = document.getElementById("url").value;
	let obj = new Object();
	obj.base64 = base64;
	
	obj.file = file;
	
	obj.name = name;
	
	obj.outputURL = outputURL;
	
	obj.url = url;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
