// sound
var explosions = [];

// screensaver
var x = 10, y = 10;
var xupdate = 2, yupdate = 1;

var bkgMusic;

function preload() {
    explosions.push( loadSound("Explosion14.wav") );
    explosions.push( loadSound("Explosion24.wav") );
    explosions.push( loadSound("Explosion28.wav") );
    explosions.push( loadSound("Explosion33.wav") );
    
    bkgMusic = loadSound("music.mp3");
}
function setup() {
    createCanvas(640, 360);
    bkgMusic.play();
}
function draw() {
    background('black');
    
    ellipse(x, y, 40);
    x += xupdate;
    y += yupdate;
    
    if (x >= width || x <= 0) {
        xupdate *= -1;
        explosions[floor(random(0, explosions.length))].play();
    }
    if (y >= height || y <= 0) {
        yupdate *= -1;
        explosions[floor(random(0, explosions.length))].play();
    }
    
    var vol = map(y, 0, height, 1, 0);
    bkgMusic.setVolume(vol);
    
    var pan = map(x, 0, width, -1, 1);
    bkgMusic.pan(pan);
    
    var rate = map(mouseX, 0, width, 0.5, 4);
    bkgMusic.rate(rate);
}