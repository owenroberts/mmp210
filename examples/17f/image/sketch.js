var cat;
function setup() {
	createCanvas(640, 480);
	cat = loadImage("images/cat.png");
	noStroke();
	background(0);
	
	
	image(cat, 0, 0);
	loadPixels();
	console.log(pixels);
	
	var columns = 40;
	var rows = 15;
	var w = width/columns;
	var h = height/rows;
	for (var x = 0; x < width; x += w) {
		for (var y = 0; y < height; y += h) {
			var c = get(x,y);
			fill(c);
			rect(x,y,w,h);
		}
	}
}

