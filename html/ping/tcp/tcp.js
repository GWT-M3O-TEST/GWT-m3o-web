
import Client from '../../client/index.js';

window.pingTcp = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let address = document.getElementById("address").value;
	let data = document.getElementById("data").value;
	let obj = new Object();
	obj.address = address;
	
	obj.data = data;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
