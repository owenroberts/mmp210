var cat;
var playing = true;
function setup() {
	var c = createCanvas(640, 360);
	c.style('position', 'absolute');
	c.style('zIndex', '1')
	cat = createVideo("cat.mp4");
	cat.loop();
	cat.style('position', 'absolute');
	console.log(cat.elt.currentTime);
}

function draw() {
	clear();
	noFill();
	if (mouseIsPressed)
		ellipse(mouseX,mouseY,100);
	var time = cat.elt.currentTime;
	if (time > 1 && time < 2) 
		ellipse(mouseX, mouseY, 100);

}

function mousePressed() {
	if (playing) {
		cat.pause();
	} else {
		cat.play();
	}
	playing = !playing;
}