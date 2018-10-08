function setup() {
    createCanvas(640, 480);
    background("white");
    
    drawTwoCircles(10, 10, 5);
    
    drawTwoCircles(10, 200, 50);
    
    drawTwoCircles(200, 200, 200);
    
}

var drawTwoCircles = function(x, y, d) {
    fill("white");
    ellipse(x, y, d, d);
    fill("black");
    ellipse(x, y + d, d, d);
};