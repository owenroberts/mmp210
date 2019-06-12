/* global variables */
var numSpaceships = 20;
var spaceShipSpeed = [];
var spaceShipX = [];
var spaceShipY = [];
var spaceShipSize = [];
var spaceShipColor = [];

function setup(){
	createCanvas(640,360);
	background(0);
	noStroke();
	fill(255);

	/* create 20 spaceships */
	for (var i = 0; i < numSpaceships; i++) {
		var x = random(0, width);
		spaceShipX.push(x);
		var y = random(0, height);
		spaceShipY.push(y);
		var s = random(20, 50);
		spaceShipSize.push(s);
		spaceShipColor.push(color(
			random(0,255),
			random(0,255),
			random(0,255)
		));
		spaceShipSpeed.push(random(2,10));
	}
}

function draw() {
	background(0);
	for (var i = 0; i < numSpaceships; i++) {
		fill(spaceShipColor[i]);
		spaceship(spaceShipX[i], spaceShipY[i], spaceShipSize[i]);
		spaceShipX[i] += spaceShipSpeed[i];
		if (spaceShipX[i] - spaceShipSize[i]/2 > width) {
			spaceShipX[i] = -spaceShipSize[i]/2;	
		}
	}
	
}

function spaceship(x, y, s) {
	
	//fill(255);
	noStroke();
	rect(x,y,s*3,s);
	triangle(x,y-s*2/3,x,y+s+s*2/3,x+s*2,y+s/2);
	arc(x+s*3, y+s/2, s, s, PI+PI/2, PI/2);
	
	for (var i = x; i < Math.floor(x+s*3); i += s) {
		stroke(0);
		ellipse(i + s/2, y + s/2, s/3);
	}
	
	fill(0,255,0);
	
}












