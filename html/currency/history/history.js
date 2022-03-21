
import Client from '../../client/index.js';

window.currencyHistory = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let code = document.getElementById("code").value;
	let date = document.getElementById("date").value;
	let obj = new Object();
	obj.code = code;
	
	obj.date = date;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
