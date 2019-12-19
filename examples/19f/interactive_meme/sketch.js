/*
    interactive meme
    10.15.2019
*/

var cat, fish;

var x, y; // instructions

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
    
    image(cat, 0, catY, width, height/2);
    image(fish, 0, fishY, width, height/2);
    
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
    strokeWeight(8);
    
    text(caption, width/2, height/2);
    
    // instructions
    
    if (!mouseIsPressed) {
        textSize(20);
        text("click here", x, y);
    }
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



