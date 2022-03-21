
import Client from '../../client/index.js';

window.quranSummary = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let chapter = document.getElementById("chapter").value;
	let language = document.getElementById("language").value;
	let obj = new Object();
	obj.chapter = chapter;
	
	obj.language = language;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
