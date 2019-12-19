/*
    animated meme
    10.22.2019
*/

var cat, fish;
var catX = 0;
var textStroke = 8;
var textStrokeSpeed = 1;

var x, y; // instructions

var textRotation = 0;
var fishScale = 1;

function preload() {
    cat = loadImage("cat.jpg");
    fish = loadImage("fish.jpg");
}

function setup() {
    var canvas = createCanvas(640, 640);
    canvas.drawingContext.miterLimit = 2;
    
    x = width - 50;
    y = 20;
}

function draw() {
    background("white");
    
    var catY = 0;
    var fishY = height/2;
    
    if (mouseIsPressed) {
        catY = height/2;
        fishY = 0;
    }
    
    image(cat, catX, catY, width, height/2);
    
    push(); // save original transformation
   
    translate(width/2, fishY);
    scale(fishScale);
    fishScale += 0.01;
    
    if (fishScale > 2) {
        fishScale = 1;
    }
    
    image(fish, -width/2, 0, width, height/2);
    
    pop(); // return to original tranformation
    
    var caption = "I'm a cat";
    
    if (mouseX > width/2 && mouseY < height/2) {
        caption = "I'm a fish";
    } else if (mouseX < width/2 && mouseY > height/2) {
        caption = "Hello!";
    } else if (mouseY > height/2) {
        caption = "Goodbye!";
    }
    
    
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont("Comic Sans MS");
    fill("green");
    stroke("white");
    strokeWeight(textStroke);
    
    translate(width/2, height/2);
    rotate(textRotation);
    textRotation += PI * 0.01;
    
    text(caption, 0, 0);
    
    
}

function mouseClicked() {
    if (mouseX > width/2 && mouseY < height/2) {
        x = 50; 
        y = height - 50;
    } else if (mouseX < width/2 && mouseY > height/2) {
        x = width - 50;
        y = height - 50;
    } else if (mouseX > width/2 && mouseY > height/2) {
        x = width - 50;
        y = 50;
    }
}



