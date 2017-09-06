var r = 0;
function setup() {
    createCanvas(640, 480);
}
function draw() {
    
    translate(300, 300);
    rotate(r);
    r += 0.01;
    
    background('lightgray');
    
    
    
    fill("yellow");
    ellipse(0, 0, 500);
   
    fill('green');
    rect(175 - 300, 175 - 300, 50, 50);
    rect(275 - 300, 175 - 300, 50, 50);
    
    line(250 - 300, 245 - 300, 200 - 300, 350 - 300);
    
    fill('red');
    triangle(175 - 300, 400 - 300, 325 - 300, 400 - 300, 345 - 300, 380 - 300);
    
 
    fill('yellow');
    arc(450 - 300, 280 - 300, 70, 90, PI+1, HALF_PI+1);
   
}