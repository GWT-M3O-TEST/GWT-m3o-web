
import Client from '../../client/index.js';

window.quranVerses = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let chapter = document.getElementById("chapter").value;
	let interpret = document.getElementById("interpret").value;
	let language = document.getElementById("language").value;
	let limit = document.getElementById("limit").value;
	let page = document.getElementById("page").value;
	let translate = document.getElementById("translate").value;
	let words = document.getElementById("words").value;
	let obj = new Object();
	obj.chapter = chapter;
	
	obj.interpret = interpret;
	
	obj.language = language;
	
	obj.limit = limit;
	
	obj.page = page;
	
	obj.translate = translate;
	
	obj.words = words;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		// resObj = JSON.parse(response);
		let res =`<table class="table">
		<thead>
		  <tr>
			<th scope="col">chapter</th>
			
			<th scope="col">page</th>
			
			<th scope="col">total_pages</th>
			
			<th scope="col">verses</th>
			
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
