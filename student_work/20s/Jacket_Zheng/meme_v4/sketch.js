/*
	meme v3
	transformation + animation
	3.25.2020
*/

//global scope
var catImage;
var x = 100;
var y = 100;

function preload() {
	catImage = loadImage("cat.jpg");
}

function setup() {
	createCanvas(500, 500);
}

function draw(){
	background(0);

	//MMP 210 text styles
	textSize(80);
	textFont('Trade Winds');
	textAlign(CENTER, CENTER);
	fill('white');

	//transformations 1
	translate(width/2, height/2);

	//calculate rotation angle
	var r = frameCount * PI / 500;
	rotate(r);
	textSize(50);
	fill('white');
	text('Click me for a surprise', 0, 0);

	if (mouseIsPressed) {
	imageMode(CENTER);
	image(catImage, x, y, 600);
	x += random(-8, 8);
	y += random(-8, 8);

	text('Miau :P', x, y, 50);
	x += random(-8, 8);
	y += random(-8, 8);
	}
}