var red;
var blue;
var x = [];
var y = [];
var s = [];
var r = [];
var b = [];

var rectX = 10;
var rectY = 10;
var rectH = 50;
var rectW = 100;

var rot = 0;

function setup() {
	createCanvas(640, 360);
	red = random(0,255);
	blue = random(0,255);
}

function draw() {
	background(51);
	
	fill(255);
	rect(rectX, rectY, rectW, rectH); 
	
	push();
	translate(width/2, height/2);
	rotate(rot);
	rect(0, 0, 100, 100);
	pop();
	
	for (var i = 0; i < x.length; i++) {
		noStroke();
		fill(r[i],0,b[i]);
		ellipse(x[i], y[i], s[i]);
		stroke(0,255,0);
		line(mouseX, mouseY, x[i], y[i]);
	}
}

function mousePressed() {
	
	var clickedButton = false;
	
	for (var i = 0; i < x.length; i++) {
		if (dist(mouseX, mouseY, x[i], y[i]) < s[i]) {
			r[i] = random(0,255);
			b[i] = random(0,255);
			clickedButton = true;
		}
	}
	
	if (mouseX > rectX && mouseX < rectX + rectW && mouseY > rectY && mouseY < rectY + rectH) {
		clickedButton = true;
		rot += 0.1;
	}
	
	if (!clickedButton) {
		x.push(mouseX);
		y.push(mouseY);
		s.push( random(50, 100) );
		r.push( random(0,255) );
		b.push( random(0,255) );
	}
}