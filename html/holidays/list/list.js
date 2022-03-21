
import Client from '../../client/index.js';

window.holidaysList = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let country_code = document.getElementById("country_code").value;
	let year = document.getElementById("year").value;
	let obj = new Object();
	obj.country_code = country_code;
	
	obj.year = year;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
