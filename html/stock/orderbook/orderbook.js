
import Client from '../../client/index.js';

window.stockOrderBook = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let date = document.getElementById("date").value;
	let end = document.getElementById("end").value;
	let limit = document.getElementById("limit").value;
	let start = document.getElementById("start").value;
	let stock = document.getElementById("stock").value;
	let obj = new Object();
	obj.date = date;
	
	obj.end = end;
	
	obj.limit = limit;
	
	obj.start = start;
	
	obj.stock = stock;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
