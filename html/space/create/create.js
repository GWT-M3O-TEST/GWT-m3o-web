
import Client from '../../client/index.js';

window.spaceCreate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let name = document.getElementById("name").value;
	let object = document.getElementById("object").value;
	let visibility = document.getElementById("visibility").value;
	let obj = new Object();
	obj.name = name;
	
	obj.object = object;
	
	obj.visibility = visibility;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
