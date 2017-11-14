function setup() {
	createCanvas(720, 360);
	textSize(40);
}
function draw() {
	background("black");
	text(mouseX, 40, 40);
	text( map( mouseX, 0, width, 0, 255), 
		 40, 80);
	
	translate(width/2, height/2);

	fill( 
		map( mouseX, 0, width, 255, 0), 
		map( mouseX, 0, width, 255, 0), 
		map( mouseY, 0, height, 0, 255) 
	);
	
	ellipse(0, 0, 100, 100);
}