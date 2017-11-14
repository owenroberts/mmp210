function setup() {
    createCanvas(640, 480);
    
    var gray = color(100);
    var pink = color(255, 0, 200);
    
    var blue = color("blue");
    var red = color("#ff0000");
    
    background("lightgreen");
    
    fill(gray);
    noStroke();
    rect(25, 25, 100, 100);
    
    noFill();
    stroke(pink);
    strokeWeight(4);
    rect(50, 50, 100, 100);
    
    strokeWeight(1);
    var r = 0;
    var rIncrement = 50;
    
    fill(r, 0, 0);
    ellipse(r, 300, rIncrement, rIncrement);
    
    r += rIncrement;

    fill(r, 0, 0);
    ellipse(r, 300, rIncrement, rIncrement);
    
    r += rIncrement;

    fill(r, 0, 0);
    ellipse(r, 300, rIncrement, rIncrement);
    
    r += rIncrement;

    fill(r, 0, 0);
    ellipse(r, 300, rIncrement, rIncrement);
    
    r += rIncrement;

    fill(r, 0, 0);
    ellipse(r, 300, rIncrement, rIncrement);
    
}