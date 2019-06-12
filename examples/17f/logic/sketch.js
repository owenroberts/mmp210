var eyeColor;
function setup() {
	createCanvas(640, 360);
	noStroke();
	eyeColor = color(0, 255, 0);
}

function draw() {
	background("white");
	if (mouseX > 0 && mouseX < width/2 && mouseY > 0 && mouseY < height/2 ) {
		eyeColor = "black";
	} else if (mouseX > width/2 && mouseX < width && mouseY > 0 && mouseY < height/2) {
		eyeColor = color(255, 0, 255);
	} else if (mouseX > 0 && mouseX < width/2 && mouseY > height/2 && mouseY < height) {
		eyeColor = "green";
	} else {
		eyeColor = color(0,255,255);
	}
	
	fill("lightgreen");
	ellipse(width/2, height/2, 100);
	fill(eyeColor);
	var eyeOffset = 20;
	ellipse(width/2 - eyeOffset, height/2 - eyeOffset, 20);
	ellipse(width/2 + eyeOffset, height/2 - eyeOffset, 20);
	
	if (mouseX > width * 2/3) {
		ellipse(mouseX, mouseY, 50);
	} else if (mouseX > width/3 && mouseX < width * 2/3) {
		arc(mouseX, mouseY, 50, 50, 0, HALF_PI);
	} else {
		rect(mouseX, mouseY, 50, 50);
	}
}
	

	
	