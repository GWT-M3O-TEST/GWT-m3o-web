
import Client from '../../client/index.js';

window.geocodingLookup = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let address = document.getElementById("address").value;
	let city = document.getElementById("city").value;
	let country = document.getElementById("country").value;
	let postcode = document.getElementById("postcode").value;
	let obj = new Object();
	obj.address = address;
	
	obj.city = city;
	
	obj.country = country;
	
	obj.postcode = postcode;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
