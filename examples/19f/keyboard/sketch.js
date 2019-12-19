/*
    keyboard input examples
    12.3.2019
*/

var explosion;

function preload() {
    explosion = loadSound('Explosion7.wav');
}

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(220);
}

function keyPressed() {
    if (keyCode == 32) {
        explosion.play();
    }
    
}


