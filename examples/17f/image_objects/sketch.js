var cat;
var circles = [];
function setup() {
	createCanvas(720, 720);
	cat = loadImage("cat.jpg");
	noStroke();
}

function draw() {
	image(cat, 0, 0);
	for (var i = 0; i < circles.length; i++) {
		circles[i].display();
	}
}

function mouseDragged() {
	var c = get(mouseX, mouseY);
	var x = new Circle(mouseX, mouseY, c);
	circles.push(x);
}

function Circle(x, y, c) {
	this.x = x;
	this.y = y;
	this.c = c;
	this.size = random(10,20);
	this.display = function() {
		fill(this.c);
		ellipse(this.x, this.y, this.size);
	}
}