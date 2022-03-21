
import Client from '../../client/index.js';

window.nftAsset = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let contract_address = document.getElementById("contract_address").value;
	let token_id = document.getElementById("token_id").value;
	let obj = new Object();
	obj.contract_address = contract_address;
	
	obj.token_id = token_id;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
