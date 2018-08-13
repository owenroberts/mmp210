/*
	interact size
*/

const u = 20; // one unit = 20 px
var p, pa, g, ga;

function setup() {
	createCanvas(400, 400);
	textSize(16);
	textAlign(LEFT, CENTER);
	textFont('menlo');
	g = color(255, 215, 0);
	p = color(100, 100, 220);
	ga = color(255, 215, 0, 127);
	pa = color(100, 100, 220, 127);
}

function draw() {
	background(200);
	grid(u);
	
	var s = mouseX;
	noStroke();
	ellipse(width/2, height/2, s);
	stroke(p);
	strokeWeight(2);
	line(width/2 - s/2, height/2, width/2 + s/2, height/2);
	line(width/2 + s/2, height/2 - 5, width/2 + s/2, height/2 + 5);
	line(width/2 - s/2, height/2 - 5, width/2 - s/2, height/2 + 5);
	
	line(0, mouseY, mouseX, mouseY);
	line(mouseX, mouseY-5, mouseX, mouseY+5);
	line(0, mouseY-5, 0, mouseY+5);
	
	noStroke();
	text('mouseX: ' + s, mouseX + u, mouseY);
	text('size: ' + s, width/2 - u, height/2 - u);
	
	text('var s = mouseX;', u, u * 18);
	text('ellipse(200, 200, s);', u, u * 19);
	
}


function grid(unit) {
	background(200);
	stroke(220);
	strokeWeight(1);
	let x = unit,
		y = unit;
	const columnNum = width / unit;
	const rowNum = height / unit;
	for (let col = 1; col <= columnNum; col++) {
		for (let row = 1; row <= columnNum; row++) {
			line(x, 0, x, height);
			x += unit;
		}
		line(0, y, width, y);
		x = unit;
		y += unit;
	}
	stroke('black'); // reset stroke
}

function mouseClicked() {
	save();
}