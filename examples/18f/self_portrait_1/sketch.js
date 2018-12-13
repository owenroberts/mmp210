/*
    Self Portrait
    v 2
    by Owen
    mmp 210 example week 3
    adding variables
*/

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(220);
    
    var headPosition = 300;
    var headWidth = 200;
    var eyesY = 200;
    
    var skinColor = 'plum';
    var hairColor = 'lightgreen';
    var eyeColor = 'yellow';
    
    // head
    fill(skinColor);
    noStroke();
    rect(headPosition, headPosition, headWidth, 250);
    
    // hair
    noFill();
    stroke(hairColor);
    strokeWeight(500);
    rect(150, 320, headWidth / 2, 25, 100);
    
    // eyes
    noFill();
    stroke(eyeColor);
    strokeWeight(10);
    ellipse(280, eyesY, 100);
    ellipse(120, eyesY, 100, 50);
   
    // body
    noStroke();
    fill(skinColor);
    ellipse(200, 400, 300);
}