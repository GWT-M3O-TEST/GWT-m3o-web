
import Client from '../../client/index.js';

window.tunnelSend = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let body = document.getElementById("body").value;
	let headers = document.getElementById("headers").value;
	let host = document.getElementById("host").value;
	let method = document.getElementById("method").value;
	let params = document.getElementById("params").value;
	let path = document.getElementById("path").value;
	let url = document.getElementById("url").value;
	let obj = new Object();
	obj.body = body;
	
	obj.headers = headers;
	
	obj.host = host;
	
	obj.method = method;
	
	obj.params = params;
	
	obj.path = path;
	
	obj.url = url;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		// resObj = JSON.parse(response);
		let res =`<table class="table">
		<thead>
		  <tr>
			<th scope="col">body</th>
			
			<th scope="col">headers</th>
			
			<th scope="col">status</th>
			
			<th scope="col">status_code</th>
			
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
