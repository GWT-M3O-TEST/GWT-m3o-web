
import Client from '../../client/index.js';

window.vehicle = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let obj = new Object();
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		resObj = JSON.parse(response);
		let res =`<table class="table">
		<thead>
		  <tr>
			<th scope="col">co2_emissions</th>
			
			<th scope="col">colour</th>
			
			<th scope="col">engine_capacity</th>
			
			<th scope="col">fuel_type</th>
			
			<th scope="col">last_v5_issued</th>
			
			<th scope="col">logo_url</th>
			
			<th scope="col">make</th>
			
			<th scope="col">month_of_first_registration</th>
			
			<th scope="col">mot_expiry</th>
			
			<th scope="col">mot_status</th>
			
			<th scope="col">registration</th>
			
			<th scope="col">tax_due_date</th>
			
			<th scope="col">tax_status</th>
			
			<th scope="col">type_approval</th>
			
			<th scope="col">wheelplan</th>
			
			<th scope="col">year_of_manufacture</th>
			
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
