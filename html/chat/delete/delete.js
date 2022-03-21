
import Client from '../../client/index.js';

window.chatDelete = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let room_id = document.getElementById("room_id").value;
	let obj = new Object();
	obj.room_id = room_id;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
