/*
	push pop visualizer
*/

// global rotate values
var r1 = 0; // rotation
var r2 = 0;

function setup() {
  createCanvas(400, 400);
	setupGraphics();

	createSlider(0, TWO_PI, r1, 0.01).input(function() {
		r1 = this.value();
	}).position(10, height - 20);
	
	createSlider(0, TWO_PI, r2, 0.01).input(function() {
		r2 = this.value();
	}).position(210, height - 20);
}

function draw() {
  grid(20);
	
	noStroke();
	text('translate(20, 100);', 10, height - 50);
	text('rotate ' + r1, 10, height - 30);
	text('translate(200, 100);', 210, height - 50);
	text('rotate ' + r2, 210, height - 30);
	
	/*
		push save the default settings
		with origin in the top left
		and rotation 0
	*/
	
	push();
	translate(20, 100);
	rotate(r1);
	rect(0, 0, 50, 50);
	ellipse(0, 0, 5);
	ellipse(100, 100, 40);
	pop();
	
	/*
		pop returns to the default
		now new transformation can be applied
		that are affected by the first transformation
	*/
	
	translate(200, 100);
	rotate(r2);
	rect(0, 0, 50, 50);
	ellipse(0, 0, 5);
	ellipse(100, 100, 40);
	
	/*
		the last shape doesn't need a push pop
		because nothing gets transformed afterward
		but if adding more shapes, push pop would be needed
		like for the first sectino
		
		remove pop() from this sketch to show how transformations
		accumulate
		
		the first rotation will only affect the first group shapes
		but without push and pop
		the second gruop of shapes will be affected by both
	*/
}

const u = 20; // one unit = 20 px
var p, pa, g, ga;

function setupGraphics() {
	textSize(16);
	textAlign(LEFT, CENTER);
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