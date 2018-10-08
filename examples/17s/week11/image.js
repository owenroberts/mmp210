// image
var img;
var w = 10,
	h = 10;

function preload() {
	img = loadImage("../imgs/cat.png");
}

function setup() {
	createCanvas(640, 360);
	noStroke();
	image(img, 0, 0, width, height);
	for (var x = 0; x < width; x += w) {
		for (var y = 0; y < height; y += h) {
			var c = get(x, y);
			fill(c);
			rect(x, y, w, h);
		}
	}
}
