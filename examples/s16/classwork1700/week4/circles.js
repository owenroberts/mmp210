function setup() {
    createCanvas(640, 480);
    
    background("white");
    
    var y = 100;
    var inc = 40;
    
    for (var r = 0; r <= width; r += inc) {
        fill(r, 0, 0);
        ellipse(r, y, inc, inc);    
    }
    
}