function setup() {
    createCanvas(640, 480);
    
    background("white");
    
    var gray = color(100);
    var pink = color(255, 0, 200);
    
    var blue = color("blue");
    var red = color("#ff0000");
    
    fill(pink);
    noStroke();
    rect(25, 25, 100, 100);
    
    noFill();
    stroke(blue);
    strokeWeight(3);
    triangle(50, 50, 150, 150, 50, 150);
    
    noStroke();
    
    var r = 0;
    var rInc = 80;
    var y = 200;
    
    fill(r, 0, 0);
    ellipse(r, y, rInc, rInc);
    
    r += rInc;
    fill(r, 0, 0);
    ellipse(r, y, rInc, rInc);
    
    r += rInc;
    fill(r, 0, 0);
    ellipse(r, y, rInc, rInc);
    
    r += rInc;
    fill(r, 0, 0);
    ellipse(r, y, rInc, rInc);
    
    r += rInc;
    fill(r, 0, 0);
    ellipse(r, y, rInc, rInc);
    
    r += rInc;
    fill(r, 0, 0);
    ellipse(r, y, rInc, rInc);
    
    r += rInc;
    fill(r, 0, 0);
    ellipse(r, y, rInc, rInc);
    
    r += rInc;
    fill(r, 0, 0);
    ellipse(r, y, rInc, rInc);
    
    r += rInc;
    fill(r, 0, 0);
    ellipse(r, y, rInc, rInc);
    
}

