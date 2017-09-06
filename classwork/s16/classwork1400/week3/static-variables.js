var blue;

function setup() {
   createCanvas(640, 480);
    background("white");
    blue = color("lightblue"); 

    stroke("purple");
    noFill();
    strokeWeight(8);
    
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);
    
    stroke("darkblue");
    strokeWeight(2);
    
    var x = 0;
    var y = 0;
    
    var ratio = 8;
    var xunit = width/ratio;
    var yunit = height/ratio;
    
    x += xunit;
    y += yunit;
    
    line(x, 0, x, height);
    line(0, y, width, y);
    
    x += xunit;
    y += yunit;
    
    line(x, 0, x, height);
    line(0, y, width, y);
    
    x += xunit;
    y += yunit;
    
    line(x, 0, x, height);
    line(0, y, width, y);
}