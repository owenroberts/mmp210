// interaction
var x = 10, y = 10, w = 150, h = 50;
var r = 255, g = 255, b = 255;
var rot = 0;
function setup() { 
    createCanvas(640, 360);
}

function draw() {
    background('black');
    fill(r, g, b);
    rect(x, y, w, h);
    
    push();
    translate(width/2, height/2);
    rotate(rot);
    rect(0, 0, 50, 50);
    pop();
}

function mousePressed() {
    if ( mouseX > x && 
        mouseX < x + w &&
        mouseY > y &&
        mouseY < y + h) {
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
        rot += 0.1;
    }
}
