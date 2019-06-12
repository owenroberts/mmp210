
function setup() {
	createCanvas(640, 460);
	background("white");
	stroke("red");
	strokeWeight(2);
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);
	frameRate(60);
}
function draw() {
	background("white");
	fill(255, frameCount/2, frameCount/2);
	ellipse(width/2, height/2, frameCount);
	
	line(mouseX, mouseY, width, height);
	line(mouseX, mouseY, 0, 0);
	ellipse(mouseX, mouseY, 40);
	line(mouseX, mouseY, pmouseX, pmouseY);
	ellipse(pmouseX, pmouseY, 20);
	
	
}