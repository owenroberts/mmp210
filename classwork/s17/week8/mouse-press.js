// interaction
var r, g, b;
var changeColor = false;
function setup() { 
    createCanvas(640, 360);
    randomColor();
}

function draw() {
    background('black');
    fill(r, g, b);
    ellipse(width/2, height/2, 200);
    if (changeColor) {
        randomColor();
    }
}

function mousePressed() {
    var d = dist(mouseX, mouseY, width/2, height/2);
    if (d < 100) {    
        changeColor = true;
    }
}

function mouseReleased() {
    changeColor = false;
}

function randomColor() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
}