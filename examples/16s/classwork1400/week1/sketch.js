var img;

function preload() {
    img = loadImage("maxresdefault.jpg");   
}

function setup() {
    createCanvas(640, 480);
    background(255);
    image(img, 0, 0, 640, 480);
}

function draw() {
     
    stroke(255,0,0);
    line(0, 0, 640, 480);
    
    stroke(0);
    fill(0, 255, 0);
    ellipse(50, 50, 60, 30);
    fill(0);
    ellipse(50, 50, 25, 25);
    
    fill(0, 255, 0);
    ellipse(150, 50, 60, 30);
    fill(0);
    ellipse(150, 50, 25, 25);
}