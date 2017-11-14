var rotX = 0, rotY = 0, rotSpeed = 0.1;
function setup(){
	var myCanvas = createCanvas(720, 360, WEBGL);
	myCanvas.parent("sketch");
}
function draw(){
	background("black");

	camera(0, 0, -100);

	push();
	rotateX(rotX);
	rotateY(rotY);
	for (var x = 0;  x < 3; x++) {
		for (var y = 0; y < 3; y++) {
			push();
			translate(x * 30, y * 30);
			box(10, 10, 10);
			pop();
		}
	}
	pop();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		rotX -= rotSpeed;
	} else if (keyCode === DOWN_ARROW) {
		rotX += rotSpeed;
	} else if (keyCode === RIGHT_ARROW) {
		rotY += rotSpeed;
	} else if (keyCode === LEFT_ARROW) {
		rotY -= rotSpeed;
	}
}