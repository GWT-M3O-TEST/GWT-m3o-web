
import Client from '../../client/index.js';

window.dbRead = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let id = document.getElementById("id").value;
	let limit = document.getElementById("limit").value;
	let offset = document.getElementById("offset").value;
	let order = document.getElementById("order").value;
	let orderBy = document.getElementById("orderBy").value;
	let query = document.getElementById("query").value;
	let table = document.getElementById("table").value;
	let obj = new Object();
	obj.id = id;
	
	obj.limit = limit;
	
	obj.offset = offset;
	
	obj.order = order;
	
	obj.orderBy = orderBy;
	
	obj.query = query;
	
	obj.table = table;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
