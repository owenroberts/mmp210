function setup() {
	createCanvas(640, 460);
}
function draw() {
	background("white");
	
	noStroke();
	fill("green");
	rect(100, 100, 200, 250);
	
	fill(180, 50, 250, 200);
	ellipse(150, 200, 50, 100);
	ellipse(250, 200, 40, 80);
	
	fill(200);
	ellipse(150, 200, 40);
	ellipse(250, 200, 30);
	
	stroke("green");
	line(150, 300, 250, 280);
}