/*
    sound example
    11.26.2019
*/

var explosion;
var bgMusic;

// button 
var x = 100;
var y = 100;
var s = 100; // size

// bg button
var bgX = 300;
var bgY = 100;
var bgSize = 100;

var r, g, b;

function preload() {
    explosion = loadSound('Explosion7.wav');
    bgMusic = loadSound('peace.mp3');
}

function setup() {
    createCanvas(640, 360);
    bgMusic.play();
}

function draw() {
    background(220);
    
    // button
    fill(r, g, b);
    ellipse(x, y, s);
    
    // bg music button
    ellipse(bgX, bgY, bgSize);
    
    var vol = map(mouseY, 0, height, 1, 0);
    bgMusic.setVolume(vol);
    
}

function mousePressed() {
    
    // detecting first button
    var d = dist(mouseX, mouseY, x, y);
    if (d < s/2) {
        explosion.play();
        r = random(255);
        g = random(255);
        b = random(255);
    }
    
    // detecting bg music button
    var bgDistance = dist(mouseX, mouseY, bgX, bgY);
    if (bgDistance < bgSize/2) {
        if (bgMusic.isPlaying()) {
            bgMusic.stop();
        } else {
            bgMusic.play();
        }
        
    }
}




