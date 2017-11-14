var rotX = 0, rotY = 0, rotZ = 0;
function setup() {
    createCanvas(720, 360, WEBGL);
    textSize(100);
}
function draw() {
    background("black");
    
    camera(0, 0, 0);
    
    rotateX(rotX);
    rotateY(rotY);
    rotateZ(rotZ);
    
    push();
    translate(-200, 0, 0);
    cone(100, 100, 100);
    text("NAME", 0, 0);
    pop();
    
    push();
    translate(200, 0, 0);
    torus(100, 50);
    pop();
}

function keyPressed() {
    console.log(keyCode);
    if (keyCode === UP_ARROW) {
        rotX -= 0.1;   
    } else if (keyCode === DOWN_ARROW) {
        rotX += 0.1;
    } else if (keyCode === LEFT_ARROW) {
        rotY += 0.1;
    } else if (keyCode === RIGHT_ARROW) {
        rotY -= 0.1;
    } else if (keyCode === 90) {
        rotZ += 0.1;
    } else if (keyCode === 88) {
        rotZ -= 0.1;
    }
}