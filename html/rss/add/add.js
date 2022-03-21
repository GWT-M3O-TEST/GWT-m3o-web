
import Client from '../../client/index.js';

window.rssAdd = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let category = document.getElementById("category").value;
	let name = document.getElementById("name").value;
	let url = document.getElementById("url").value;
	let obj = new Object();
	obj.category = category;
	
	obj.name = name;
	
	obj.url = url;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
