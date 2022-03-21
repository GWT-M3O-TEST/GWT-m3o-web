
import Client from '../../client/index.js';

window.sentimentAnalyze = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let lang = document.getElementById("lang").value;
	let text = document.getElementById("text").value;
	let obj = new Object();
	obj.lang = lang;
	
	obj.text = text;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
