var x = 10;
var y = 10;
var xSpeed = 20;
var ySpeed = 2;
var rndm = 1;
var r = 255, g = 255, b = 255;

function setup() {
	createCanvas(640, 360);
	background(100);
	fill(255);
	noStroke();
}

function draw() {
	// background(100);
	var sz = random(40, 60);
	ellipse(x, y, sz);
	
	
	if (frameCount % 30 == 0) {
		r = random(0,255);
		g = random(0,255);
		b = random(0,255);
		rndm = random(0, 2);
	}
	fill(r, g, b);

	
	x += xSpeed * rndm;
	y += ySpeed * rndm;
	if (x > width || x < 0) {
		xSpeed *= -1;
	}
	
	if (y > height || y < 0) {
		ySpeed *= -1;
	}
	// console.log(x);
}

function mousePressed() {
	rndm = random(0, 2);
}