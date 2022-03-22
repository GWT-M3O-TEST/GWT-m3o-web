
import Client from '../../client/index.js';

window.evchargersReferenceData = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let obj = new Object();
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		// resObj = JSON.parse(response);
		let res =`<table class="table">
		<thead>
		  <tr>
			<th scope="col">charger_types</th>
			
			<th scope="col">checkin_status_types</th>
			
			<th scope="col">connection_types</th>
			
			<th scope="col">countries</th>
			
			<th scope="col">current_types</th>
			
			<th scope="col">data_providers</th>
			
			<th scope="col">operators</th>
			
			<th scope="col">status_types</th>
			
			<th scope="col">submission_status_types</th>
			
			<th scope="col">usage_types</th>
			
			<th scope="col">user_comment_types</th>
			
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
