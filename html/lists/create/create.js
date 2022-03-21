
import Client from '../../client/index.js';

window.listsCreate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let items = document.getElementById("items").value;
	let name = document.getElementById("name").value;
	let obj = new Object();
	obj.items = items;
	
	obj.name = name;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
