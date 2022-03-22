
import Client from '../../client/index.js';

window.contactCreate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let addresses = document.getElementById("addresses").value;
	let birthday = document.getElementById("birthday").value;
	let emails = document.getElementById("emails").value;
	let links = document.getElementById("links").value;
	let name = document.getElementById("name").value;
	let note = document.getElementById("note").value;
	let phones = document.getElementById("phones").value;
	let social_medias = document.getElementById("social_medias").value;
	let obj = new Object();
	obj.addresses = addresses;
	
	obj.birthday = birthday;
	
	obj.emails = emails;
	
	obj.links = links;
	
	obj.name = name;
	
	obj.note = note;
	
	obj.phones = phones;
	
	obj.social_medias = social_medias;
	
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
