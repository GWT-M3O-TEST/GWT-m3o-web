
import Client from '../../client/index.js';

window.sunnahHadiths = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let book = document.getElementById("book").value;
	let collection = document.getElementById("collection").value;
	let limit = document.getElementById("limit").value;
	let page = document.getElementById("page").value;
	let obj = new Object();
	obj.book = book;
	
	obj.collection = collection;
	
	obj.limit = limit;
	
	obj.page = page;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
