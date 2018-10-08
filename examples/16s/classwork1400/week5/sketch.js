function setup() {
    createCanvas(640, 480);
    background("white");
    
    drawWindow(10, 30, 100, 200, 5, 50);
    drawWindow(150, 30, 100, 200, 5, 50);
    
    drawWindow(10,  300, 100, 200, 5, 50);
    drawWindow(150, 300, 100, 200, 5, 50);
    
    drawWindow(510, 30, 10, 20, 1, 5);

    
}

var drawWindow = function(x, y, w, h, s, d) {
    stroke("gray");
    strokeWeight(s);
    fill("lightgreen");
    
    rect(x, y, w, h/2);
    arc(x + w/2,  y + s, w , d, PI, TWO_PI);
    
    fill("darkgreen");
    
    rect(x, y + h/2, w, h/2);
    
    noStroke();
    fill(0, 0, 0, 50);
    rect(x - s/2, y + h/2 + s/2, w + s, s); 
}