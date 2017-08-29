var r, g, b;
var angle = 0;
var button, input, name;
function setup(){
	var myCanvas = createCanvas(720, 360);
	myCanvas.parent("sketch");
	
	rectMode(CENTER);
	r = random(0, 255);
	g = random(0, 255);
	b = random(0, 255);
	
	button = createButton("Add your name");
	button.mousePressed(addName);
	button.parent("sketch");
	button.position( 20, 60 );
	
	input = createInput();
	input.parent("sketch");
	input.position(20, 20);
	
	textSize(40);
	textAlign(CENTER);
}
function draw(){
	background("black");
	translate(width/2, height/2);	
	fill(r, g, b);

	
	rect(0, 0, 200, 200);
	
	fill("purple");
	text(name, 0, 0);
}
function addName() {
	name = input.value();
}
