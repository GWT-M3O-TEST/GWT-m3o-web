class Client {
  constructor(token) {
    this.token = token;
  }

  call(service, endpoint, request, callback) {
    // e.g /v1/helloworld/Call
    var path = "/v1/" + service + "/" + endpoint

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4);
      callback(xmlHttp.responseText, xmlHttp.status);
    };
    xmlHttp.open("POST", "https://api.m3o.com" + path, true); // true for asynchronous
    xmlHttp.setRequestHeader("Authorization", "Bearer " + this.token);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(request);
  }
}
