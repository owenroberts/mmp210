function setup() {
    createCanvas(640, 480);
    background("white");
    
    noStroke();
    
    var blue = color("blue");
    var green = color("green");
    
    fill(blue);
    //triangle(30, 75, 58, 20, 86, 75);
    
    //blue
    var x1 = 100;
    var y1 = 100;
    
    //green
    var x2 = 250;
    var y2 = 50;
    
    //pink
    var x3 = x2;
    var y3 = y1;
    
    noFill();
    strokeWeight(2);
    stroke("lightblue");
    ellipse(x1, y1, 10, 10);
    
    stroke("lightgreen");
    ellipse(x2, y2, 10, 10);
    
    stroke("pink");
    ellipse(x3, y3, 10, 10);
    
    fill("green");
    noStroke();
    triangle(x1, y1, x2, y2, x3, y3);
}