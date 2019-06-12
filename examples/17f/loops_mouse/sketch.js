function setup() {
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	fill(mouseX);
	
	var columnNum = 20;
	var columnSize = width/columnNum;
	for (var x = 0; x <= width; x += columnSize) {
		if (x < mouseX) {
			fill(mouseX - x, 255, 255);
		} else {
			fill(x - mouseX, 255, 255);
		}
		rect(x, 0, columnSize, height);	
	}
}
