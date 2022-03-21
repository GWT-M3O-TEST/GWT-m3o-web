
import Client from '../../client/index.js';

window.avatarGenerate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let format = document.getElementById("format").value;
	let gender = document.getElementById("gender").value;
	let upload = document.getElementById("upload").value;
	let username = document.getElementById("username").value;
	let obj = new Object();
	obj.format = format;
	
	obj.gender = gender;
	
	obj.upload = upload;
	
	obj.username = username;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
