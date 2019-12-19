/*
    meme version 1
    10.3.2019
*/

var cat;

function preload() {
    cat = loadImage("cat.jpg");
}

function setup() {
    var canvas = createCanvas(960, 240);
    canvas.drawingContext.miterLimit = 2;
}

function draw() {
    background("white");
    fill('black');
    
//    tint(255, 0, 127);
    image(cat, 0, 0, width/4, height);
    image(cat, width/4 * 2, 0, width/4, height);
    image(cat, width/4 * 3, 0, width/4, height);
    image(cat, width/4, 0, width/4, height);
    
    
    
    if (mouseX < width/2) {
        fill('black');
        rect(0, 0, width, height);
    }
    
    if (mouseX > width/2) {
        textSize(100);
        fill("pink");
        stroke("purple");
    } else {
        textSize(20);
        fill("white");
        noStroke();
    }

    /* conditional statement */
    if (mouseIsPressed) {
        textFont("Comic Sans MS");
        strokeWeight(5);
        textAlign(CENTER, CENTER);
        text("i'm a cat", width/2, height/2);
    }
    
    
}



