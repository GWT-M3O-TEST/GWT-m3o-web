
import Client from '../../client/index.js';

window.evchargersSearch = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let box = document.getElementById("box").value;
	let connection_types = document.getElementById("connection_types").value;
	let country_id = document.getElementById("country_id").value;
	let distance = document.getElementById("distance").value;
	let levels = document.getElementById("levels").value;
	let location = document.getElementById("location").value;
	let max_results = document.getElementById("max_results").value;
	let min_power = document.getElementById("min_power").value;
	let operators = document.getElementById("operators").value;
	let usage_types = document.getElementById("usage_types").value;
	let obj = new Object();
	obj.box = box;
	
	obj.connection_types = connection_types;
	
	obj.country_id = country_id;
	
	obj.distance = distance;
	
	obj.levels = levels;
	
	obj.location = location;
	
	obj.max_results = max_results;
	
	obj.min_power = min_power;
	
	obj.operators = operators;
	
	obj.usage_types = usage_types;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
