function whiteBall() {
	var x = Math.floor(Math.random()*69 + 1)
	if (x < 10) {
		return " " + x
	}
	else {
		return x
	}
}

function redBall() {
	var x = Math.floor(Math.random()*26 + 1)
	if (x < 10) {
		return " " + x
	}
	else {
		return x
	}
}

function powerBall() {
	var string = "<pre>"

	for (var i = 1; i < 6; i++) {
		string += "White ball " + i  + ":\t" + whiteBall()+"\n"
	};

	string += "Red Ball:\t" + redBall()+"\n"
	string += "</pre>"

	document.getElementById("lucky numbers").innerHTML = string
}