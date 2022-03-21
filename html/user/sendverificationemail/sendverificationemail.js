
import Client from '../../client/index.js';

window.userSendVerificationEmail = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let email = document.getElementById("email").value;
	let failure_redirect_url = document.getElementById("failure_redirect_url").value;
	let from_name = document.getElementById("from_name").value;
	let redirect_url = document.getElementById("redirect_url").value;
	let subject = document.getElementById("subject").value;
	let text_content = document.getElementById("text_content").value;
	let obj = new Object();
	obj.email = email;
	
	obj.failure_redirect_url = failure_redirect_url;
	
	obj.from_name = from_name;
	
	obj.redirect_url = redirect_url;
	
	obj.subject = subject;
	
	obj.text_content = text_content;
	
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
