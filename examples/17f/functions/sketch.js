
function setup() {
	createCanvas(640, 360);
	background(200);
	//twoCircles(100, 200, 100, 100);
	//twoCircles(200, 100, 20, 200);
	//twoCircles(500, 200, 50, 20);
	noStroke();
	
	var w = 20;
	for (var x = 10; x < width; x += w + 10) {
		myWindow(x, 10, w, 50, 2);
	}
	
	myWindow(100, 100, 200, 300, 20);
	myWindow(350, 10, 200, 300, 20);
	
}

function myWindow(x, y, w, h, m) {
	fill(0);
	rect(x, y, w, h);
	
	/* window panes */
	fill(255);
	rect(x + m, y + m, w/2 - m/2, h/2 - m/2);
	rect(x + m + w/2, y + m, w/2 - m/2, h/2 - m/2);
	rect(x + m, y + m + h/2, w/2 - m/2, h/2 - m/2);
	rect(x + m + w/2, y + m + h/2, w/2 - m/2, h/2 - m/2);
}

function twoCircles(x, y, d, s) {
	ellipse(x, y, s);
	ellipse(x + d, y, s);
}