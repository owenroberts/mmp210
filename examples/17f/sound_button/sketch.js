var circles = [];
var soundFiles = ["ex0.wav", "ex1.wav", "ex2.wav", "ex3.wav"];
var sounds = [];

function preload() {
	for (var i = 0; i < soundFiles.length; i++) {
		var s = loadSound(soundFiles[i]);
		sounds.push(s);
	}
}

function setup() {
	createCanvas(720, 720);
	noStroke();
//	for (var i = 0; i < 10; i++) {
//		var c = new Circle(random(0,width), random(0,height));
//		circles.push(c);
//	}
	
	var circle1 = new Circle(width/4, height/4,  sounds[0]);
	circles.push(circle1);
	var circle2 = new Circle(width * 3/4, height/4,  sounds[1]);
	circles.push(circle2);
}

function draw() {
	background(51);
	for (var i = 0; i < circles.length; i++) {
		circles[i].display();
	}
}

function mousePressed() {
	for (var i = 0; i < circles.length; i++) {
		circles[i].click();
	}
}

function Circle(x, y, s) {
	this.x = x;
	this.y = y;
	this.c = color( random(255), random(255), random(255));
	this.size = random(50,100);
	//this.sound = random(sounds);
	this.sound = s;
	this.display = function() {
		fill(this.c);
		ellipse(this.x, this.y, this.size);
	}
	this.click = function() {
		var d = dist(mouseX, mouseY, this.x, this.y);
		if ( d < this.size) {
			this.c = color( random(255), random(255), random(255));
			for (var i = 0; i < sounds.length; i++) {
				sounds[i].stop();
			}
			this.sound.play();
		}
	}
}







