
import Client from '../../client/index.js';

window.gifsSearch = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let lang = document.getElementById("lang").value;
	let limit = document.getElementById("limit").value;
	let offset = document.getElementById("offset").value;
	let query = document.getElementById("query").value;
	let rating = document.getElementById("rating").value;
	let obj = new Object();
	obj.lang = lang;
	
	obj.limit = limit;
	
	obj.offset = offset;
	
	obj.query = query;
	
	obj.rating = rating;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
