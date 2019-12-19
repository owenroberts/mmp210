/* 
    self portrait
    by owen 
    9/12/2019
*/

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(100, 0, 255);
    
    fill("LAVENDER");
    noStroke();
    ellipse(300, 200, 400, 300); // face
    
    stroke("INDIGO");
    noFill();
    strokeWeight(5);
    fill(250, 100, 100, 100);
    rect(150, 100, 50, 100); // left eye
    triangle(400, 100, 450, 150, 500, 100); // right eye
    
    strokeWeight(10);
    stroke("#00ffff");
    line(200, 300, 400, 350); // mouth
}







