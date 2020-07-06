var eye = 60;
var centereye = 30;
var value = 0;
let slider;
let glass = 255;
// The Variable "Glass" is usedfor more than just the glasses

function setup() {
	createCanvas(640,360);
	noCursor();
	slider = createSlider(0, 255, 0, 0);
	slider.position(100, 400);
	slider.style('width', '80px');
	// Lines 8-9 of the styles.css center the sketch. That code is from https://stackoverflow.com/questions/953918/how-to-align-a-div-to-the-middle-horizontally-width-of-the-page?answertab=active#tab-top
	// Lines 9-11 & 17-18 of this code is directly modified from the p5 website
}

function draw() {
	let val = slider.value();
	background(val);

	if (keyIsDown(UP_ARROW)) {
		eye += 1;
		centereye += 1;
	}

	if (keyIsDown(DOWN_ARROW)) {
		eye -= 1;
		centereye -= 1;
	}

	// The eyeballs (Lines 24-26 from MMP210 Class Website)
	var r = 0; // red;
	var g = map(mouseX, 0, width, 0, 255); // green
	var b = map(mouseY, 0, height, 0, 255); // blue
	fill(r, g, b);
	circle(200, 160, eye);
	circle(400, 160, eye);
	fill(0);
	circle(200, 160, centereye);
	circle(400, 160, centereye);
	
	// My eyebrows
	fill(0);
	triangle(265, 80, 135, 100, 275, 100); // Left
	triangle(335, 60, 465, 80, 325, 80); // Right

	// The mouth & nose
	fill(0)
	rect(250, 260, 100, 30, 20); // Mouth
	triangle(300, 130, 280, 230, 320, 230); // Nose
	
	// Part of the frame on my actual glasses
	fill(glass);
	circle(265, 160, 10);
	circle(335, 160, 10);
	circle(135, 160, 10);
	circle(465, 160, 10);

	// My glasses
	noFill();
	stroke(glass);
	circle(200, 160, 150); // Left lens
	circle(400, 160, 150); // Right lens
	line(265, 160, 335, 160); // Bridge

	// The mouse pointer, with a color change based on the click of the mouse
	if (mouseIsPressed) {
		fill(0);
	square(mouseX, mouseY, 20, 0, 20, 20, 20);
	} else {
		fill(255);
	square(mouseX, mouseY, 20, 0, 20, 20, 20);
	}

}

function mouseClicked() {
  if (glass === 255) {
    glass = 0;
  } else {
    glass = 255;
  }
}