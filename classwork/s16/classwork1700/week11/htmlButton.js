var r, g, b;
var angle = 0;
var button;
function setup(){
	var myCanvas = createCanvas(720, 360);
	myCanvas.parent("sketch");
	
	rectMode(CENTER);
	r = random(0, 255);
	g = random(0, 255);
	b = random(0, 255);
	
	button = createButton("Rotate");
	button.mousePressed(rotateAngle);
	button.parent("sketch");
	button.position( 20, 20);
}
function draw(){
	background("black");
	fill(r, g, b);
	

	/* rotating another shape */
	push();
	translate(width/2, height/2);
	rotate(angle);
	rect(0, 0, 200, 200);
	pop();
}
function rotateAngle() {
	angle += 0.1;
}
