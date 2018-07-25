/*
	translate visualizer
*/

// global translate values
var x = 0;
var y = 0;

function setup() {
  createCanvas(400, 400);
	setupGraphics();
	createSlider(0, width, x).input(function() {
		x = this.value();
	}).position(10, height - 60);
	
	createSlider(0, height, y).input(function() {
		y = this.value();
	}).position(10, height - 30);
}

function draw() {
  grid(20);
	
	noStroke();
	fill(0);
	text('translate(x, y);', 10, height - 120);
	text('rect(10, 10, 50, 50);', 10, height - 100);
	text('ellipse(100, 100, 40);', 10, height - 80);
	text('translate x ' + x, 150, height - 50);
	text('translate y ' + y, 150, height - 20);
	
	/*
		drawing before translate
	*/
	fill(255);
	stroke(0);
	rect(10, 10, 50, 50);
	ellipse(100, 100, 40);
	
	/*
		using x & y to determine origin
	*/
	translate(x, y);
	
	/*
		drawing functions are still hard coded
		but drawing moves because the origin is moving
		same drawing after translate
	*/
	fill(255);
	stroke(0);
	rect(10, 10, 50, 50);
	ellipse(100, 100, 40);
	
	fill('black');
	noStroke();
	text('0,0', -10, -15);
	ellipse(0, 0, 6);

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
