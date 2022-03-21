
import Client from '../../client/index.js';

window.nftCreate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let data = document.getElementById("data").value;
	let description = document.getElementById("description").value;
	let image = document.getElementById("image").value;
	let name = document.getElementById("name").value;
	let obj = new Object();
	obj.data = data;
	
	obj.description = description;
	
	obj.image = image;
	
	obj.name = name;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
