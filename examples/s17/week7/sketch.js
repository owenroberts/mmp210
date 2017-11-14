// windows part ii
function setup() { 
    createCanvas(640, 480);
    background(100);
    noStroke();
    
    fill("green");
    twoEllipses(0, 0);
    twoEllipses(100, 100, 40);
    twoEllipses(200, 200, 100);
    twoEllipses(300, 300, 10);
}

function twoEllipses(x, y, s) {
    ellipse(x, y, s);
    ellipse(x+s, y, s);
}