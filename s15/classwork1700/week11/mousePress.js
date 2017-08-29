var r = 0, g = 0, b = 0;
function setup() {
	createCanvas(720, 360);
}
function draw() {
	background("black");
	translate(width/2, height/2);
	
	fill(r, g, b);
	ellipse(0, 0, 100, 100);
}
function mousePressed() {
	r = random(0, 255);
	g = random(0, 255);
	b = random(0, 255);
}