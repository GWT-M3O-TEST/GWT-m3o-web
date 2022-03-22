
import Client from '../../client/index.js';

window.userUpdatePassword = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let confirm_password = document.getElementById("confirm_password").value;
	let new_password = document.getElementById("new_password").value;
	let old_password = document.getElementById("old_password").value;
	let userId = document.getElementById("userId").value;
	let obj = new Object();
	obj.confirm_password = confirm_password;
	
	obj.new_password = new_password;
	
	obj.old_password = old_password;
	
	obj.userId = userId;
	
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
