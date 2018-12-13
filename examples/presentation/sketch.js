/*
    final project presentation slides
*/
var slide = 0;
var numberOfSlides = 3;

var bird, fish;

function preload() {
    bird = loadImage("bird.jpg");
    fish = loadImage("fish.jpg");
}

function setup() {
    createCanvas(800, 500);
   
    textFont('monospace');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background(220);
    
    if (slide == 0) {
        
        textSize(60);
        text("Final Project Idea", width/2, height/2);

        textSize(30);
        text("by Wayne Gretzky", width/2, height/2 + 100);
    
    } else if (slide == 1) {
    
        textSize(30);
        text("Force resisiting sensor", width/2, 100);
        
        // fsr graphic
        noStroke();
        rect(width/2, 300, 50, 300);
        ellipse(width/2, 200, 150);
        rect(width/2 - 10, 450, 10, 50);
        rect(width/2 + 10, 450, 10, 50);
    
    } else if (slide == 2) {
       
        text("Theme: Animals", width/2, 50);
        image(fish, 200, 100);
        image(bird, 0, 100);
        
    }
}

function mousePressed() {
    if (mouseX > width/2) {
        if (slide < numberOfSlides - 1) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}







