
import Client from '../../client/index.js';

window.cacheSet = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let key = document.getElementById("key").value;
	let ttl = document.getElementById("ttl").value;
	let value = document.getElementById("value").value;
	let obj = new Object();
	obj.key = key;
	
	obj.ttl = ttl;
	
	obj.value = value;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
