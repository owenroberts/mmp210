function setup() {
	createCanvas(512, 512);
	rectMode(CENTER);
	design();
	
}

function design() {
	background(51);
	translate(width/2, height/2);
	var x = 0;
	var y = 0;
	
	var faceSize = random(200, width);
	var eyeSize = random(20, 80);
	var eyeOffset = random(80, faceSize/4);
	
	var r = random(0,255);
	var g = random(0,255);
	var b = random(0,255);
	
	noStroke();
	fill(r,g,b);
	/* face */
	if (random(1) > 0.5) {
		ellipse(x, y, faceSize);
	} else {
		rect(x, y, faceSize, faceSize, faceSize/8);
	}
	
	/* eyes */
	r += 50;
	g += 50;
	b += 50;
	fill(r,g,b);
	var coinFlip = random(1)
	if (coinFlip < 0.33) {
		ellipse(x + eyeOffset, y - eyeOffset, eyeSize);
		ellipse(x - eyeOffset, y - eyeOffset, eyeSize);
	} else if (coinFlip < 0.66) {
		text("MMP", x + eyeOffset, y - eyeOffset);
		text("210", x - eyeOffset, y - eyeOffset);
	} else {
		rect(x + eyeOffset, y - eyeOffset, eyeSize, eyeSize);
		rect(x - eyeOffset, y - eyeOffset, eyeSize, eyeSize);
	}
	
	/* mouth */
	rectMode(CENTER);
	var numMouthShapes = 6;
	var shapeSpace = faceSize/numMouthShapes/2;
	
	if (random(1) > 0.5) {
		for (var i = -faceSize/4; i < faceSize/4; i += shapeSpace) {
			rect(i, y + eyeOffset, shapeSpace, shapeSpace, shapeSpace/4);
		}
	} else {
		var mouthY = faceSize/4;
		for (var i = -faceSize/4; i < faceSize/4; i += shapeSpace) {
			triangle(i, mouthY, i + shapeSpace, mouthY + shapeSpace, i, mouthY + shapeSpace);
		}
	}
	
	/* nose */
	arc(x, y, faceSize/8, faceSize/4, random(PI, PI + HALF_PI), random(PI + HALF_PI, TWO_PI));
	
	textAlign(CENTER);
	textSize(faceSize/8);
	if (random(1) > 0.5) {
		textFont("cursive");
	} else {
		textFont("Comic Sans MS");
	}
	//text("mmp 210", x, y);
}

function mouseClicked() {
	design();
}



