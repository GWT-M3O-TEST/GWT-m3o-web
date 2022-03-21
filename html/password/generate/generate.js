
import Client from '../../client/index.js';

window.passwordGenerate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let length = document.getElementById("length").value;
	let lowercase = document.getElementById("lowercase").value;
	let numbers = document.getElementById("numbers").value;
	let special = document.getElementById("special").value;
	let uppercase = document.getElementById("uppercase").value;
	let obj = new Object();
	obj.length = length;
	
	obj.lowercase = lowercase;
	
	obj.numbers = numbers;
	
	obj.special = special;
	
	obj.uppercase = uppercase;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
