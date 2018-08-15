/*
	map function
*/

const u = 20; // one unit = 20 px
var p, pa, g, ga;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(20);
	textAlign(LEFT, BOTTOM);
	textFont('menlo');
	g = color(255, 215, 0);
	p = color(100, 100, 220);
	ga = color(255, 215, 0, 127);
	pa = color(100, 100, 220, 127);
}

function draw() {
	background(200);
	grid();

	var c = map(mouseX, 0, width, 0, 255);
	fill(c);
	rect(u, u, u * 5, u * 5);

  
  	for (let x = u; x < 255 + u; x++) {
	  stroke(x);
	  line(x, u * 14, x, u * 16);
	}
  
  	stroke('black');
  	strokeWeight(2);
  	// line(u, u*16, u, u*17);
  	// line(u + 255, u*16, u + 255, u*17);
  	
  	line(0, height/2, width, height/2);
  	line(mouseX, height/2, u + c, u * 14);
  	line(u + c, u * 16, u + c, u * 14);
  	line(mouseX, height/2 - u/2, mouseX, height/2 + u/2);
	 
	fill('black');
	noStroke();
  	text('0', u, u * 17.5);
  	text('255', u + 250, u * 17.5);
  	text('0', u/4, u * 11.5);
  	text(width, width - u * 2, u * 11.5);
  	text('x: ' + mouseX, mouseX - u, u * 9);
  	text('color: ' + floor(c), c + u, u * 19);

}

function grid() {
	stroke(220);
	strokeWeight(1);
	for (let x = 0; x <= width; x += u) {
		for (let y = 0; y <= height; y += u) {
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
}

function mouseClicked() {
	save();
}