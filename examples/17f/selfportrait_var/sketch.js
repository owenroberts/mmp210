function setup() {
	createCanvas(640, 460);
}
function draw() {
	background("white");
	
	var faceColor = color(50,200,100);
	var eyeColor = color(180, 50, 250, 200);
	var pupilColor = color(200);
	var mouthColor = color(50, 50, 255);
	
	var eyeWidth = 50;
	var eyeHeight = 80;
	var leftEyeX = 120;
	
	noStroke();
	fill(faceColor);
	rect(100, 100, 200, 250);
	
	fill(eyeColor);
	ellipse(leftEyeX, 200, eyeWidth, eyeHeight);
	ellipse(250, 200, eyeWidth, eyeHeight);
	
	fill(pupilColor);
	ellipse(leftEyeX, 200, 40);
	ellipse(250, 200, 30);
	
	stroke(mouthColor);
	strokeWeight(4);
	line(150, 300, 250, 280);
}