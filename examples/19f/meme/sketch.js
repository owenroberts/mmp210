/*
    meme version 1
    10.3.2019
*/

var cat;

function preload() {
    cat = loadImage("cat.jpg");
}

function setup() {
    var canvas = createCanvas(640, 360);
    canvas.drawingContext.miterLimit = 2;
}

function draw() {
    background("white");
    fill('black');
    
//    tint(255, 0, 127);
    image(cat, 0, 0, 100, 100);
    image(cat, 100, 0, 100, 100);
    image(cat, 200, 0, 100, 100);
    image(cat, 300, 0, 100, 100);

    
    textAlign(LEFT, BOTTOM); // default
    textSize(30);
    noStroke();
     textStyle(NORMAL);
    textFont("Mansalva");
    text("MMP 210", 100, 100);
    
    textSize(100);
    fill('purple');
    
    stroke('pink');
    strokeWeight(10);
    textStyle(ITALIC);
    textFont("Comic Sans MS");
    text("hello world", 100, 200);
    
    textSize(20);
    textAlign(RIGHT, TOP);
    text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse earum quod exercitationem vero, temporibus veritatis in ea voluptates dolore doloremque amet sint, doloribus blanditiis maiores enim qui fuga. Adipisci, quaerat?", 50, 250, 400);
    
}



