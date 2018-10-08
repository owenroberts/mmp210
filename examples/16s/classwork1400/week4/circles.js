function setup() {
    createCanvas(640, 200);
    background("white");
    
    var y = 100;
    var inc = 50;
    
    for (var r = 0; r <= width + 2*inc; r += inc) {
        fill(r, 0, 0);
        ellipse(r, y, inc, inc);
    }

}