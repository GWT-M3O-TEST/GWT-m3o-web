
import Client from '../../client/index.js';

window.thumbnailScreenshot = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let height = document.getElementById("height").value;
	let url = document.getElementById("url").value;
	let width = document.getElementById("width").value;
	let obj = new Object();
	obj.height = height;
	
	obj.url = url;
	
	obj.width = width;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
