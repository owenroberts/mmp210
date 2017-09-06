function setup() {
    createCanvas(640, 480);
    background("white");
 
    
    drawWindow(10, 10, 20, 30, 10);
    drawWindow(40, 10, 20, 30, 10);
    drawWindow(400, 10, 200, 400, 70);
}

var drawWindow = function(x, y, w, h, r) {
    noStroke();
    
    fill("lightgreen");
    
    rect(x, y, w, h/10);
    rect(x, y + h, w, h/10);
    
    fill("lightblue");
    
    ellipse(x + w/4, y + h/4, r, r);
    ellipse(x + w - w/4, y + h/4, r, r);
    
    ellipse(x + w/4, y + h/2 + h/4, r, r);
    ellipse(x + w - w/4, y + h/2 + h/4, r, r);
}

