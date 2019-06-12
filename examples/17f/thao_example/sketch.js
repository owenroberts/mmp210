var w, h;
function setup() {
	createCanvas(640, 360);
	w = width;
	h = height;
}

function draw() {
	background("black");

	/* draw lines for quadrants */
	strokeWeight(3);
	stroke("white");

	if (mouseX > width/2 && mouseY > height/2) {
		if (point) {
			background(225,224,102);
		}
		w++;
		h++;
		rect(width/2, height/2, w, h);
	} else if (mouseX < width/2 && mouseY > height/2) {
		if (point) {
		background(37,31,71);
	}
		rect(0, height/2, width/2, height++);
	} else if (mouseX > width/2 && mouseY < height/2) {
		if (point) {
		background(241,95,92);
	}
		rect(width/2, 0, width++, height/2);
	} else {
		if (point) {
		background(164,14,76);
	}
		rect(0, 0, width/2, height/2);
	}
}