
import Client from '../../client/index.js';

window.chatSend = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let client = document.getElementById("client").value;
	let room_id = document.getElementById("room_id").value;
	let subject = document.getElementById("subject").value;
	let text = document.getElementById("text").value;
	let user_id = document.getElementById("user_id").value;
	let obj = new Object();
	obj.client = client;
	
	obj.room_id = room_id;
	
	obj.subject = subject;
	
	obj.text = text;
	
	obj.user_id = user_id;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
