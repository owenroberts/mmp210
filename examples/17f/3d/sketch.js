var catImage;
var catVideo;
var rotX = 0, rotY = 0;
var playing = true;
function setup() {
	createCanvas(640, 360, WEBGL);
	catImage = loadImage("cat.jpg");
	catVideo = createVideo("cat.mp4");
	catVideo.loop();
	catVideo.hide();
}

function draw() {
	background(51);
	ortho();
	
	texture(catImage);
	
	push();
	translate(-100, 0, 0);
	rotateX(rotX);
	rotateY(rotY);
	box(100, 100, 100);
	pop();
	
	texture(catVideo);
	translate(100, 0, 0);
	rotateX(mouseY/(PI*10));
	rotateY(mouseX/(PI*10));
	sphere(100, 100, 100);
	
	rotX += 0.01;
	rotY += 0.01;
	
}

function keyPressed() {
	console.log(keyCode);
	if (keyCode == 32) {
		if (playing) {
			catVideo.pause();
		} else {
			catVideo.play();
		}
		playing = !playing;
	}
}

