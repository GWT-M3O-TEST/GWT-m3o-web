
import Client from '../../client/index.js';

window.searchDelete = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let id = document.getElementById("id").value;
	let index = document.getElementById("index").value;
	let obj = new Object();
	obj.id = id;
	
	obj.index = index;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
