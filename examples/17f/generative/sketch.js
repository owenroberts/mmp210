function setup() {
	createCanvas(512, 512);
	design();
}

function design() {
	background(51);
	var originX = random(-width/2, width/2);
	translate(width/2, height/2);
	var numArcs = 10;
	//noStroke();
	stroke(255);
	strokeWeight(10);
	
	for (var i = 0; i < numArcs; i++) {
		var r = random(127,150);
		var g = random(127,150);
		var b = random(200,255);
		if (random(0,1) > 0.5) {
			r = random(127,255);
			g = random(51,150);
			b = random(51,127);	
		}
		var a = random(120,140);
		fill(r, g, b, a);
	
		var size = random(8, width);
	
		var arcFinish = random(0, TWO_PI);
		var arcStart = random(0, TWO_PI);
		var x = 0; // random(-width/4, width/4);
		var y = 0; // random(-height/4, height/4);
	
		arc(x, y, size, size, arcStart, arcFinish);
	}
}

function mouseClicked() {
	design();
}
