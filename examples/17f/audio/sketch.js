var jump;
var x = 0;
var y = 0;
var speedX = 5;
var speedY = 2;

var music;

function preload() {
	jump = loadSound("jump.wav");
	music = loadSound("background.mp3");
}

function setup() {
	createCanvas(640, 360);
	noStroke();
	music.play();
}

function draw() {
	background(51);
	
	fill(255);
	ellipse(x, y, 50);
	
	if (x > width || x < 0) {
		speedX *= -1;
		//jump.play();
	}
	
	if (y > height || y < 0) {
		speedY *= -1;
		//jump.play();
	}
	
	x += speedX;
	y += speedY;
	
	var vol = map(y, 0, 360, 1, 0);
	var p = map(x, 0, width, -1, 1);
	var r = map(mouseX, 0, width, 0.1, 2);
	//music.setVolume(vol);
	//music.pan(p);
	music.rate(r);
}

function mousePressed() {
	// jump.play();
}