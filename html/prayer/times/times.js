
import Client from '../../client/index.js';

window.prayerTimes = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let date = document.getElementById("date").value;
	let days = document.getElementById("days").value;
	let latitude = document.getElementById("latitude").value;
	let location = document.getElementById("location").value;
	let longitude = document.getElementById("longitude").value;
	let obj = new Object();
	obj.date = date;
	
	obj.days = days;
	
	obj.latitude = latitude;
	
	obj.location = location;
	
	obj.longitude = longitude;
	
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
