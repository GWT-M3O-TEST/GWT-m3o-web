
import Client from '../../client/index.js';

window.locationSearch = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let center = document.getElementById("center").value;
	let numEntities = document.getElementById("numEntities").value;
	let radius = document.getElementById("radius").value;
	let type = document.getElementById("type").value;
	let obj = new Object();
	obj.center = center;
	
	obj.numEntities = numEntities;
	
	obj.radius = radius;
	
	obj.type = type;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
