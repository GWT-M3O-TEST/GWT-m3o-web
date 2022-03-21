
import Client from '../../client/index.js';

window.bitcoinPrice = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let symbol = document.getElementById("symbol").value;
	let obj = new Object();
	obj.symbol = symbol;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
