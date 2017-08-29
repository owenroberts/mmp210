var r = 255, g = 255, b = 255;
var x, y, w, h;
function setup() {
	createCanvas(720, 360);
	rectMode(CENTER);
}
function draw() {
	background("black");
	
	fill(r, g, b);
	
	x = width/2;
	y = height/2;
	w = 100;
	h = 20;
	
	rect(x, y, w, h);
}

function mousePressed(){
	if ( mouseX > x - w/2 && mouseX < x + w/2 && mouseY > y - h/2 && mouseY < y + h/2 ) {
		r = random(0, 255);
		g = random(0, 255);
		b = random(0, 255);
	}
}