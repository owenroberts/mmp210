var img;
var circles = [];
var r = 50;
function setup() {
	createCanvas(640, 480);
	img = loadImage("cat-small.jpg");
	noStroke();
}

function draw() {
	image(img, 0, 0);
	for (var i = 0; i < circles.length; i++) {
		circles[i].draw();	
	}
}

function mouseDragged() {
	var x = mouseX + random(-r, r);
	var y = mouseY + random(-r, r);
	var c = img.get(x, y);
	circles.push( new Circle(x, y, c) );
}

function Circle(x, y, c) {
	this.x = x;
	this.y = y;
	this.w = random(10, 20);
	this.c = c;
	this.draw = function() {
		fill(this.c);
			rect(this.x, this.y, this.w, this.w);
	}
}
