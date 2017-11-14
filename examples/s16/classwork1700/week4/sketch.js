function setup() {
    createCanvas(640, 480);
    background("white");
 
    stroke("darkblue");
    
    var x = 0;
    var y = 0;
    var radius = 40;
    
    var ratio = 6;
    var xunit = width/ratio;
    var yunit = height/ratio;
    
    for (var i = 0; i < ratio * ratio; i++) {
        
        if ( x + xunit/2 < width/2) {
            fill("lightblue");
        } else {
            fill("pink");
        }
        
        ellipse(x + xunit/2, y + yunit/2, radius, radius);
        x += xunit;
        
        if (x >= width) {
            y += yunit;
            x = 0;
        }
    }   
}