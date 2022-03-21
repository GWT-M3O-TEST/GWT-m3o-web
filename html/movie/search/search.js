
import Client from '../../client/index.js';

window.movieSearch = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let language = document.getElementById("language").value;
	let page = document.getElementById("page").value;
	let primary_release_year = document.getElementById("primary_release_year").value;
	let query = document.getElementById("query").value;
	let region = document.getElementById("region").value;
	let year = document.getElementById("year").value;
	let obj = new Object();
	obj.language = language;
	
	obj.page = page;
	
	obj.primary_release_year = primary_release_year;
	
	obj.query = query;
	
	obj.region = region;
	
	obj.year = year;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
