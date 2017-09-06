var x = 0;
var y = 0;
var r = 5;

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background("white");
    
    strokeWeight(4);
    stroke("blue");
    
    if (mouseX > width/2) {
        fill("lightblue");
    } else {
        fill("pink");
    }
    
    
    if (frameCount < 100) {
        r = frameCount;
    }
    
    if (x < width) {
        x++;
    } else {
        if (y < height) {
            y++;
        }
    }
    if (y == height) {
        x -= 2;
    }
    if (x == 0) {
        y -=2;
    }
    
    line(mouseX, mouseY, x, y);
    ellipse(mouseX, mouseY, r, r);
}