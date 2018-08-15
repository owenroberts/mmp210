/*
	rect colision
*/

function setup() {
	createCanvas(windowWidth, windowHeight);
	setupGraphics();
	
}

function draw() {
	grid(u);
	// displayMousePosition();
	
	
	// drawing 
	
	if (mouseX < 100) {
		fill(ga);
		rect(0, 0, 100, height);
	}
	if (mouseX > 300) {
		fill(ga);
		rect(300, 0, width - 300, height);
	}
	
	if (mouseY < 100) {
		fill(ga);
		rect(0, 0, width, 100);
	}
	if (mouseY > 200) {
		fill(ga);
		rect(0, 200, width, height - 200);
	}
	
	if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 200) {
		fill(ga);
		rect(100, 100, 200, 100);
	}
	
	strokeWeight(2); noFill();
	
	stroke(p);
	line(100, 0, 100, height);
	line(300, 0, 300, height);
	line(0, 100, width, 100);
	line(0, 200, width, 200);

	stroke(0);
	rect(100, 100, 200, 100);
	
	noStroke();
	fill(0);
	text('mouseX < 100', u, u * 8);
	text('mouseX > 300', u * 16, u * 8);
	text('mouseY < 100', u * 6, u * 2);
	text('mouseY > 200', u * 6, u * 12);
		
	
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