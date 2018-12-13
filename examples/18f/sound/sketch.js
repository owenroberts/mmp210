/*
    Sound Example
    11.20.2018
*/

// sound file variables
var chickens;
var coin;
var music;

var x = 100;
var y = 100;
var s = 100;
var r = 0;
var g = 0;
var b = 0;

function preload() {
    chickens = loadSound("chickens.mp3");
    coin = loadSound("coin.wav");
    music = loadSound("music.mp3");
}

function setup() {
    createCanvas(640, 360);
    chickens.playMode("restart");
    music.play();
}

function draw() {
    if (chickens.isPlaying()) {
        background('yellow');
    } else {
        background('green');
    }
    
    fill(r, g, b);
    ellipse(x, y, s);
    
    
    var vol = map(mouseY, 0, height, 1, 0);
    music.setVolume(vol);
    
    // var pan = map(mouseX, 0, width, -1, 1);
    // music.pan(pan);
    
    var rate = map(mouseX, 0, width, 0.1, 3);
    music.rate(rate);
}

function mousePressed() {
    if (chickens.isPlaying()) {
        chickens.pause();
    } else {
        chickens.play();
    }
    
    var d = dist(x, y, mouseX, mouseY);
    if (d < s/2) {
        r = random(255);
        g = random(255);
        b = random(255);
        coin.play();
    }
}












