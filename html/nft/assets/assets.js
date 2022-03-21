
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
		resObj = JSON.parse(response);
		let res =`<table class="table">
		<thead>
		  <tr>
		  </tr>
		</thead>
		<tbody>
		  <tr>
			<td>Mark</td>
			<td>Otto</td>
			<td>@mdo</td>
		  </tr>
		  <tr>
			<td>Jacob</td>
			<td>Thornton</td>
			<td>@fat</td>
		  </tr>
		  <tr>
			<td colspan="2">Larry the Bird</td>
			<td>@twitter</td>
		  </tr>
		</tbody>
	  </table>`
		document.getElementById("restable").innerHTML = res;
	});
}
