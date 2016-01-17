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


console.log("Your lucky powerball numbers:")

for (var i = 1; i < 6; i++) {
	console.log("white ball " + i  + ":\t" + whiteBall())
};

console.log("red ball:\t" + redBall())