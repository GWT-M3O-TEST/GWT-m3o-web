
import Client from '../../client/index.js';

window.placeSearch = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let location = document.getElementById("location").value;
	let open_now = document.getElementById("open_now").value;
	let query = document.getElementById("query").value;
	let radius = document.getElementById("radius").value;
	let type = document.getElementById("type").value;
	let obj = new Object();
	obj.location = location;
	
	obj.open_now = open_now;
	
	obj.query = query;
	
	obj.radius = radius;
	
	obj.type = type;
	
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
