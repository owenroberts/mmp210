function setup() {
	createCanvas(640, 460);
}
function draw() {
	background("white");
	
	var w = 50;
	var h = 60;
	var y = 50;
	var x = 50;
	
	rect(x, y, w, h);
	
	x += 100;
	rect(x, y, w, h);
	
	x += 100;
	rect(x, y, w, h);
	
	x += 100;
	rect(x, y, w, h);
	
	x += 100;
	rect(x, y, w, h);
	
	x += 100;
	rect(x, y, w, h);
	
	y += 100;
	rect(50, y, w, h);
}