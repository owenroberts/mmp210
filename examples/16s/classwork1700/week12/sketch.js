var cat;
var playing = true;
var img;
var rotX = 0, rotY = 0;
var y = 0;
function setup() {
	createCanvas(720, 360, WEBGL);
	cat = createVideo("cat.mp4");
	img = loadImage("cat.jpg");
	cat.loop();
	cat.hide();
	
}

function draw() {
	background("black");
	
	camera(0, 0, 300);
	
	texture(img);
	
	push();
	translate(300, 0, y);
	y += 10;
	if (y > height) y = -2*height;
	rotateX(rotX);
	rotateY(rotY);
	sphere(200);
	pop();
	
	texture(cat);
	push();
	translate(-300, 0, 0);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	cylinder(200, 200);
	pop();
}

function mouseDragged() {
	rotX = mouseX / 200;
	rotY = mouseY / 200;
}

function keyPressed() {
	if (keyCode === 32) {
		if (playing) cat.pause();
		else cat.play();
		playing = !playing;
	}
}