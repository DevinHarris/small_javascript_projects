window.onload = draw();

function draw() {
	// Assign  our canvas element to a variable
	var canvas = document.getElementsByTagName('canvas')[0];

	// Create the HTML5 context object to enable draw methods

	var ctx = canvas.getContext("2d");

	// fillStyle (r,g,b, alpha)
	ctx.fillStyle = "rgba(0,200,0,1)";
	// fillRect (X, Y, width, height);

	ctx.fillRect(36,10,22,12);

}