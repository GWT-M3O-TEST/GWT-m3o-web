
import Client from '../../client/index.js';

window.chatList = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let user_id = document.getElementById("user_id").value;
	let obj = new Object();
	obj.user_id = user_id;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
