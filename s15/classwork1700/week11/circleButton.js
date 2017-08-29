var r = 255, g = 255, b = 255;
function setup() {
	createCanvas(720, 360);
}
function draw() {
	background("black");
	
	fill(r, g, b);
	ellipse(width/2, height/2, 200, 200);
}

function mousePressed(){
	if ( dist(mouseX, mouseY, width/2, height/2) < 100 ) {
		r = random(0, 255);
		g = random(0, 255);
		b = random(0, 255);
	}
}