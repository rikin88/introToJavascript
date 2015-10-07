function HttpRequest(url, callback) {
	this.request = new XMLHttpRequest();
	this.request.open("GET", url);

	var tempRequest = this.request;

	function reqReadyStateChange() {
		if(tempRequest.readyState == 4) {
			if(tempRequest.status == 200) {
				callback(tempRequest.responseText, "newText" );
			}
			else {
				alert("An error occured trying to contact the server.");
			}
		}
	}

	this.request.onreadystatechange= reqReadyStateChange;
}

HttpRequest.prototype.send = function() {
	this.request.send(null);
}

function handleData(text, id) {
	alert(id);
	document.getElementById(id).innerHTML = text;
}

var request = new HttpRequest("file:///C:/dev/introToJavascript/introToJavascript/ch13_example3b.html", handleData);
request.send();