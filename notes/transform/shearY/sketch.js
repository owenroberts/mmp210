/*
	shearY visualizer
*/

// global translate values
var x = 0;
var y = 0;
var s = 0.001; // shear value
var w = 100; // size 

function setup() {
  createCanvas(400, 400);
	setupGraphics();
	createSlider(-width, width, x).input(function() {
		x = this.value();
	}).position(10, height - 40);
	
	createSlider(-height, height, y).input(function() {
		y = this.value();
	}).position(10, height - 20);
	
	createSlider(-PI, PI, s, 0.01).input(function() {
		s = this.value();
	}).position(10, height - 60);
}

function draw() {
  grid(20);
	
	fill(0); noStroke();
	text('shearY ' + s, 150, height - 50);
	text('translate x ' + x, 150, height - 30);
	text('translate y ' + y, 150, height - 10);
	
	/*
		moving the rectangle away from the origin point
		changes the angle that shear is applied
	*/
	
	fill(0);
	translate(200, 200);
	ellipse(0, 0, 5);

	
	fill(255);
	push();
	shearY(s);
	stroke(0);
	rect(x, y, w, w);
	ellipse(x + w/2, y + w/2, w, w);
	line(-width, 0, width, 0);
	pop();
	
	noFill(); stroke(0);
	arc(0, 0, w, w, 0, s);

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