var x = 100;
var y = 100;
var speed = 2;
var red;
var b;
var g;

function setup() {
    createCanvas(640, 480);
    red = random(0, 255);
    b = random(0, 255);
    g = random(0, 255);
}

function draw() {
    background("white");
    
    if (frameCount % 30 == 0) {
        red = random(0, 255);
        b = random(0, 255);
        g = random(0, 255);
    }
    fill(red, g, b);
    ellipse(x, y, 40, 40);
    
    x += speed;
    
    var r = random(-5, 5);
   /* speed += r;*/
    
    if (x > width) {
        x = speed;   
    }
    
    if (x > width/2) {
        y -= speed + r;
    } else {
        y += speed + r;
    }
}
