
import Client from '../../client/index.js';

window.quranSearch = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let language = document.getElementById("language").value;
	let limit = document.getElementById("limit").value;
	let page = document.getElementById("page").value;
	let query = document.getElementById("query").value;
	let obj = new Object();
	obj.language = language;
	
	obj.limit = limit;
	
	obj.page = page;
	
	obj.query = query;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
