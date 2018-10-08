// 3d textures 
var cat;
var img;
var rotX = 0, rotY = 0;
function setup() { 
    createCanvas(640, 480, WEBGL);
    cat = createVideo("cat.mp4");
    img = loadImage("../imgs/cat.png");
    cat.loop();
    cat.hide();
}
function draw() {
    background('black');
    texture(img);
    
    push();
    translate(200, 0, 0);
    rotateX(rotX);
    rotateY(rotY);
    sphere(100);
    pop();
    
    texture(cat);
    
    push();
    translate(-200, 0, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(100, 100, 100);
    pop();
}

function mouseDragged() {
    rotX = mouseX / 100;
    rotY = mouseY / 100;
}
