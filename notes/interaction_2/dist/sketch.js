/*
	p5 graphics template
	v0.3
*/

function setup() {
	createCanvas(windowWidth, windowHeight);
	setupGraphics();
	
}

function draw() {
	grid(u);
	// displayMousePosition();
	
	
	// drawing 
	stroke(0); strokeWeight(2); noFill();
	ellipse(width/2, height/2, 200);
	ellipse(width/2, height/2, 10);
	ellipse(mouseX, mouseY, 10);
	
	line(width/2, height/2, mouseX, mouseY);
	strokeWeight(1);
	dottedLine(width/2, height/2, width/2, mouseY, 5);
	dottedLine(width/2, mouseY, mouseX, mouseY, 5);
	
	
	var d = dist(width/2, height/2, mouseX, mouseY);
	
	if (d <= 100) {
		fill(ga); noStroke();
		ellipse(width/2, height/2, 200);
	}
	
	fill(0); noStroke();
	text('distance = ' + floor(d), mouseX, mouseY);
	
	text('dist(100, 100, mouseX, mouseY)', u, u * 18);
}

function dottedLine(x1, y1, x2, y2, len) {
	var d = dist(x1, y1, x2, y2);
	var v = new p5.Vector(x2, y2);
	v.sub(new p5.Vector(x1, y1));
	v.div(d/len);
	
	var s = new p5.Vector(x1, y1);
	for (let i = 0; i < d/len; i++) {
		if (i % 2 == 0)
			line(s.x, s.y, s.x + v.x, s.y + v.y);
		s.add(v);
	}
	
}

const u = 20; // one unit = 20 px
var p, pa, g, ga;

function setupGraphics() {
	textSize(16);
	textAlign(LEFT, BOTTOM);
	textFont('menlo');
	g = color(255, 215, 0);
	p = color(100, 100, 220);
	ga = color(255, 215, 0, 127);
	pa = color(100, 100, 220, 127);
}

function displayMousePosition() {
	noStroke(); fill(0);
	text('x: ' + mouseX, u/2, u);
	text('y: ' + mouseY, u/2, u * 2);
}

function grid(unit) {
	background(200);
	stroke(220);
	strokeWeight(1);
	let x = unit,
		y = unit;
	const columnNum = width / unit;
	const rowNum = height / unit;
	for (let col = 1; col <= columnNum; col++) {
		for (let row = 1; row <= columnNum; row++) {
			line(x, 0, x, height);
			x += unit;
		}
		line(0, y, width, y);
		x = unit;
		y += unit;
	}
	stroke('black'); // reset stroke
}

function mouseClicked() {
	// save();
}