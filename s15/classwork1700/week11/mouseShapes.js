var r = 0, g = 0, b = 0;

var x = [];
var y = [];

function setup() {
	createCanvas(720, 360);
}
function draw() {
	background("black");
	
	fill(r, g, b);
	
	for (var i = 0; i < x.length; i++) {
		triangle(x[i], y[i], x[i] + 100, y[i] + 100, x[i] + 200, y[i]);
	}
}
function mousePressed() {
	r = random(0, 255);
	g = random(0, 255);
	b = random(0, 255);
}
function mouseDragged() {
	x.push(mouseX);
	y.push(mouseY);
}