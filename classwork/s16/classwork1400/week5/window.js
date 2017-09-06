function setup() {
    createCanvas(640, 480);
    background("white");
    
    var x = 20;
    var y = 100;
    var w = 150;
    var h = 300;
    var s = 8;
    var d = 120; // height of the arc
    
    stroke("gray");
    strokeWeight(s);
    fill("lightgreen");
    
    rect(x, y, w, h/2);
    arc(x + w/2,  y + 4, w + 1, d, PI, TWO_PI);
    
    fill("darkgreen");
    
    rect(x, y + h/2, w, h/2);
    
    noStroke();
    fill(0, 0, 0, 50);
    rect(x - s/2, y + h/2 + s/2, w + s, s);
    
}