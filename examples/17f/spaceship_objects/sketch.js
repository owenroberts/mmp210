/* global variables */
var spaceships = [];
var numSpaceships = 10;
function setup(){
	createCanvas(640,360);
	background(0);
	noStroke();
	fill(255);
	for (var i = 0; i < numSpaceships; i++) {
		var s = new Spaceship(random(0,width),random(0,height));
		spaceships.push(s);
	}
}

function draw() {
	background(0);
	for (var i = 0; i < spaceships.length; i++) {
		spaceships[i].display();
		spaceships[i].update();
	}
}

function mousePressed() {
	var s = new Spaceship(mouseX, mouseY);
	spaceships.push(s);
}

function Spaceship(x, y) {
	this.x = x;
	this.y = y;
	this.size = random(20, 50);
	this.color = color(
		random(0,255),
		random(0,255),
		random(0,255)
	);
	this.speed = random(2,10);
	this.display = function() {
		fill(this.color);
		noStroke();
		rect(this.x, this.y, this.size * 3, this.size);
		triangle(
			this.x, this.y - this.size * 2/3, 
			this.x, this.y + this.size + this.size * 2/3, 
			this.x + this.size * 2, this.y + this.size/2
		);
		arc(this.x + this.size * 3, this.y + this.size/2, this.size, this.size, PI+PI/2, PI/2);
		
		for (var i = this.x; i < Math.floor(this.x + this.size * 3); i += this.size) {
			stroke(0);
			ellipse(i + this.size/2, this.y + this.size/2, this.size/3);
		}
	};
	this.update = function() {
		this.x += this.speed;
		if (this.x - this.size/2 > width) {
			this.x = -this.size/2;
		}
	};
}










