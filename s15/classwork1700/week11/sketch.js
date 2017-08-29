var x = 0, y = 0, z = 0;
var rotX = 0, rotY = 0, rotZ = 0;
var speed = 20;
var rotSpeed = 0.2;
function setup() {
	createCanvas(720, 360, WEBGL);
}
function draw() {
	camera(0, 0, 100);
	background("black");
	ambientLight(255);
	pointLight(250, 250, 250, 100, 100, 0);
	specularMaterial(0, 0, 200);
	
	push();
	rotateX(mouseX/100);
	rotateY(mouseY/100);
	rotateZ(rotZ);
	
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			push();
			translate(220 * i, 220 * j, z);
			box(100, 100, 100);
			sphere(130);
			pop();
		}
	}
	
	pop();
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		rotZ += rotSpeed;
	}
	if (keyCode === LEFT_ARROW) {
		rotZ -= rotSpeed;
	}
	if (keyCode === UP_ARROW) {
		z -= speed;
	}
	if (keyCode === DOWN_ARROW) {
		z += speed;
	}
}