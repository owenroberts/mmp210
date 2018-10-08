function setup() {
    createCanvas(640, 480);
    background("white");
    
    stroke("darkblue");
    
    var x = 0;
    var y = 0;
    
    var ratio = 16;
    var xunit = width/ratio;
    var yunit = height/ratio;
    
    
    for ( var i = 0; i < ratio; i++) {
        x += xunit;
        y += yunit;
        line(x, 0, x, height);
        line(0, y, width, y);
    }
}