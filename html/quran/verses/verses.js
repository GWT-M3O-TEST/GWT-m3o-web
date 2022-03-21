
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
		document.getElementById("json").innerText = response;
	});
}
