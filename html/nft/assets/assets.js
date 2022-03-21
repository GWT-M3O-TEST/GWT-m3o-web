
import Client from '../../client/index.js';

window.nftAssets = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let collection = document.getElementById("collection").value;
	let cursor = document.getElementById("cursor").value;
	let limit = document.getElementById("limit").value;
	let offset = document.getElementById("offset").value;
	let order = document.getElementById("order").value;
	let order_by = document.getElementById("order_by").value;
	let obj = new Object();
	obj.collection = collection;
	
	obj.cursor = cursor;
	
	obj.limit = limit;
	
	obj.offset = offset;
	
	obj.order = order;
	
	obj.order_by = order_by;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
