
import Client from '../../client/index.js';

window.movieSearch = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let language = document.getElementById("language").value;
	let page = document.getElementById("page").value;
	let primary_release_year = document.getElementById("primary_release_year").value;
	let query = document.getElementById("query").value;
	let region = document.getElementById("region").value;
	let year = document.getElementById("year").value;
	let obj = new Object();
	obj.language = language;
	
	obj.page = page;
	
	obj.primary_release_year = primary_release_year;
	
	obj.query = query;
	
	obj.region = region;
	
	obj.year = year;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		// resObj = JSON.parse(response);
		let res =`<table class="table">
		<thead>
		  <tr>
			<th scope="col">page</th>
			
			<th scope="col">results</th>
			
			<th scope="col">total_pages</th>
			
			<th scope="col">total_results</th>
			
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
