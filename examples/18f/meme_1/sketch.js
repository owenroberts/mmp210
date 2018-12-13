/*
    Meme v 1
    by Owen
    10.9.2018
    conditional logic / interactive
    mmp 210 week 6
*/

var bird; // global
var fish;

function preload() {
    bird = loadImage("bird.jpg");
    fish = loadImage("fish.jpg");
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
    
    if (mouseX > width/2) {
        image(bird, 0, 0, width/2, height);
        image(fish, width/2, 0, width/2, height);
    } else {
        image(fish, 0, 0, width/2, height);
        image(bird, width/2, 0, width/2, height);
    }
   
    
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont("Comic Sans MS");
    
    if (mouseIsPressed) {
        text("MEME", width/2, height/2);
    } else {
        text("CLICK ME", width/2, height/2);
    }
    
}







