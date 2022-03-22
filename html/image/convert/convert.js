
import Client from '../../client/index.js';

window.imageConvert = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let base64 = document.getElementById("base64").value;
	let file = document.getElementById("file").value;
	let name = document.getElementById("name").value;
	let outputURL = document.getElementById("outputURL").value;
	let url = document.getElementById("url").value;
	let obj = new Object();
	obj.base64 = base64;
	
	obj.file = file;
	
	obj.name = name;
	
	obj.outputURL = outputURL;
	
	obj.url = url;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		// resObj = JSON.parse(response);
		let res =`<table class="table">
		<thead>
		  <tr>
			<th scope="col">base64</th>
			
			<th scope="col">url</th>
			
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
