
import Client from '../../client/index.js';

window.rssFeed = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let limit = document.getElementById("limit").value;
	let name = document.getElementById("name").value;
	let offset = document.getElementById("offset").value;
	let obj = new Object();
	obj.limit = limit;
	
	obj.name = name;
	
	obj.offset = offset;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}