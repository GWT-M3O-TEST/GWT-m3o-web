
import Client from '../../client/index.js';

window.imageResize = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let base64 = document.getElementById("base64").value;
	let cropOptions = document.getElementById("cropOptions").value;
	let file = document.getElementById("file").value;
	let height = document.getElementById("height").value;
	let name = document.getElementById("name").value;
	let outputURL = document.getElementById("outputURL").value;
	let url = document.getElementById("url").value;
	let width = document.getElementById("width").value;
	let obj = new Object();
	obj.base64 = base64;
	
	obj.cropOptions = cropOptions;
	
	obj.file = file;
	
	obj.height = height;
	
	obj.name = name;
	
	obj.outputURL = outputURL;
	
	obj.url = url;
	
	obj.width = width;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
