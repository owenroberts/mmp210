var r = 255, g = 255, b = 255;
var x, y, w, h;
var angle = 0;
var changeColor, changeRotation;
function setup() {
	createCanvas(720, 360);
	rectMode(CENTER);
	changeColor = new Button(60, 20, 50, 20);
	changeRotation = new Button( 60, 50, 50, 20);
}
function draw() {
	background("black");
	fill(r, g, b);
	
	changeColor.display();
	changeRotation.display();
	
	push();
	translate(width/2, height/2);
	rotate(angle);
	rect(0, 0, 200, 200);
	pop();
}

function mousePressed(){
	changeColor.detect( function() {
		r = random(0, 255);
		g = random(0, 255);
		b = random(0, 255);
	});
	changeRotation.detect( function() {
		angle += 0.1;
	});
}

function Button(x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.display = function() {
		rect(this.x, this.y, this.w, this.h);
	}
	this.detect = function(callback) {
		if ( mouseX > this.x - this.w/2 && mouseX < this.x + this.w/2 && mouseY > this.y - this.h/2 && mouseY < this.y + this.h/2 ) {
			callback();
		}
	}
}