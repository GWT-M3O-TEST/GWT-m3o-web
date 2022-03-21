
import Client from '../../client/index.js';

window.newsHeadlines = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let date = document.getElementById("date").value;
	let language = document.getElementById("language").value;
	let locale = document.getElementById("locale").value;
	let obj = new Object();
	obj.date = date;
	
	obj.language = language;
	
	obj.locale = locale;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
