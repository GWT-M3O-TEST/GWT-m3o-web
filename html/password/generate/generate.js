
import Client from '../../client/index.js';

window.passwordGenerate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let length = document.getElementById("length").value;
	let lowercase = document.getElementById("lowercase").value;
	let numbers = document.getElementById("numbers").value;
	let special = document.getElementById("special").value;
	let uppercase = document.getElementById("uppercase").value;
	let obj = new Object();
	obj.length = length;
	
	obj.lowercase = lowercase;
	
	obj.numbers = numbers;
	
	obj.special = special;
	
	obj.uppercase = uppercase;
	
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
