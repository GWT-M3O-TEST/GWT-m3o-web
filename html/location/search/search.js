
import Client from '../../client/index.js';

window.locationSearch = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let center = document.getElementById("center").value;
	let numEntities = document.getElementById("numEntities").value;
	let radius = document.getElementById("radius").value;
	let type = document.getElementById("type").value;
	let obj = new Object();
	obj.center = center;
	
	obj.numEntities = numEntities;
	
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
