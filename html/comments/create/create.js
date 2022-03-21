
import Client from '../../client/index.js';

window.commentsCreate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let subject = document.getElementById("subject").value;
	let text = document.getElementById("text").value;
	let obj = new Object();
	obj.subject = subject;
	
	obj.text = text;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
