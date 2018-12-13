/*
    Self Portrait
    v 1
    by Owen
    mmp 210 example week 2
*/

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(220);
    
    // head
    fill('plum');
    noStroke();
    rect(100, 100, 200, 250);
    
    // hair
    noFill();
    stroke("lightgreen");
    strokeWeight(500);
    rect(150, 320, 100, 25, 100);
    
    // eyes
    noFill();
    stroke('yellow');
    strokeWeight(10);
    ellipse(280, 180, 100);
    ellipse(120, 180, 100, 50);
   
}