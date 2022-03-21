
import Client from '../../client/index.js';

window.emailSend = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let from = document.getElementById("from").value;
	let html_body = document.getElementById("html_body").value;
	let reply_to = document.getElementById("reply_to").value;
	let subject = document.getElementById("subject").value;
	let text_body = document.getElementById("text_body").value;
	let to = document.getElementById("to").value;
	let obj = new Object();
	obj.from = from;
	
	obj.html_body = html_body;
	
	obj.reply_to = reply_to;
	
	obj.subject = subject;
	
	obj.text_body = text_body;
	
	obj.to = to;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
