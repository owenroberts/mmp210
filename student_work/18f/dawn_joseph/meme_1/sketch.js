/*
Meme 
v 1
by Dawn Joseph
10.11.2018
Interactive meme
MMMP 210 Week 6
*/
var mr1; // global
var mr2;
var mr3;
var mr4;

function preload() {
    mr1 = loadImage("mr1.jpg");
    mr2 = loadImage("mr2.jpg");
    mr3 = loadImage("mr3.jpg");
    mr4 = loadImage("mr4.jpg");
}

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(91, 96, 115);
    rect(0, 0, 400, 400);
    fill(255, 210, 218);
    rect(400, 0, 400, 400);
    fill(202, 241, 188);
    rect(0, 400, 400, 400);
    fill(253, 255, 182);
    rect(400, 400, 400, 400);
    fill('orange');
    
    
    /* draw quandrant lines */
	strokeWeight(2);
	stroke("white");
    
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

	fill("white");
    noStroke();

	/* four quandrant */	
	if (mouseX > width/2 && mouseY > height/2) {
		image(mr1, width/2, height/2, width/2, height/2);
	} else if (mouseX < width/2 && mouseY > height/2) {
		image(mr2, 0, height/2, width/2, height/2);
	} else if (mouseX > width/2 && mouseY < height/2) {
		image(mr3, width/2, 0, width/2, height/2);
	} else {
		image(mr4, 0, 0, width/2, height/2);
	}
    
    
    fill(35, 156, 211);
    textAlign(LEFT);
    textSize(31);
    textFont("Arial Rounded MT Bold");
    stroke('black');
    strokeWeight(3);
    text("Liar Liar pants on fire!", (width/78)+20, (height/2)-10);
    
    
    fill(35, 156, 211);
    textAlign(RIGHT);
    textSize(31);
    textFont("Arial Rounded MT Bold");
    text("McConnell!", (width/1)-110, (height/2)-10);
    stroke('black');
    strokeWeight(3);
    
    fill(35, 156, 211);
    textAlign(LEFT);
    textSize(31);
    textFont("Arial Rounded MT Bold");
    text("Giuliani!", (width/78)+120, (height/1)-15);
    stroke('black');
    strokeWeight(3);
    
    fill(35, 156, 211);
    textAlign(RIGHT);
    textSize(31);
    textFont("Arial Rounded MT Bold");
    text("Huck-a-bee!", (width/1)-110, (height/1)-15);
    stroke('black');
    strokeWeight(3);
}

