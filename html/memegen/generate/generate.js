
import Client from '../../client/index.js';

window.memegenGenerate = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let bottom_text = document.getElementById("bottom_text").value;
	let font = document.getElementById("font").value;
	let id = document.getElementById("id").value;
	let max_font_size = document.getElementById("max_font_size").value;
	let top_text = document.getElementById("top_text").value;
	let obj = new Object();
	obj.bottom_text = bottom_text;
	
	obj.font = font;
	
	obj.id = id;
	
	obj.max_font_size = max_font_size;
	
	obj.top_text = top_text;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}
