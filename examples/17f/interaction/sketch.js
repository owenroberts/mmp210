var r, g, b;
var sz = 10;
function setup() {
	createCanvas(640, 360);
	frameRate(60);
	rectMode(CENTER);
	fill("white");
}
function draw() {
	background(255);
	
	fill(r, g, b);
	console.log(mouseX, mouseY);
	ellipse(mouseX, mouseY, width - mouseX); // face
	ellipse(mouseX + 20, mouseY - 20, sz); // left eye
	ellipse(mouseX - 20, mouseY - 20, 20); // right eye
	rect(mouseX, mouseY + 20, 60, 20, 10);
	
}
function mousePressed() {
	//ellipse(mouseX, mouseY, mouseX/20 + mouseY/10);
	r = mouseX;
	g = mouseY;
	b = (mouseX + mouseY)/2;
	sz += 10;
}
function keyPressed() {
	background(200, 200);
}