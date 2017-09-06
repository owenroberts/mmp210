// animation

var x = 10;
var y = 10;

var r = 0, g = 0, b = 0;

function setup() { 
   createCanvas(640, 480);
    noStroke();
}

function draw() {
    //background(200);
    
    if (frameCount % 60 == 0) {
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
    }
    
    fill(r, g, b);
    
    if (frameCount < 60*5) {
        ellipse(x, y, random(40, 60));
    } else {
        rect(x, y, random(10, 60), random(10, 40));   
    }
    
    x += 1;

    if (x > width) {
        x = 0;
    }
    
    if (x > width/2) {
        y--;
    } else {
        y++;
    }
}
