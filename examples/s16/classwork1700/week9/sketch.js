var numShips = 20;
var x = [];
var y = [];
var speed = [];
var size = [];
var shipColor = [];

var rot = 0;

function setup() {
    createCanvas(640, 480);
    
    for (var i = 0; i < numShips; i++) {
        x[i] = random( 0, width/4 );
        y[i] = random( 0, height );
        speed[i] = random(1, 3);
        size[i] = random(10, 40);
        
        var r = random(0, 255);
        var b = random(0, 255);
        var g = random(0, 255);
        
        shipColor[i] = color(r, g, b);
    }
    
   /* translate(width/2, height/2);
    scale(0.5);*/
   
}

function draw() {
    background("white");
    
    /*rotate(rot);
    rot += -0.04;*/

    for (var i = 0; i < numShips; i++) {
        
        fill(shipColor[i]);
        rocket(x[i], y[i], size[i]);
        if (x[i] < width) x[i] += speed[i] ;
        else x[i] = 0;
    }
    
    

}




var rocket = function(x, y, size) {
        
    var fin = size/4;
    var cone = size * 1.5;
    var windowWidth = size/3.33;
    var distance = size/2;
        
    rect(x, y, size * 2, size);
    triangle(x, y, x, y - fin, x + size, y);
    triangle(x, y + size, x, y + size + fin, x + size, y + size);
    
    
    arc(x + size*2, y + size/2, cone, size, PI + HALF_PI, HALF_PI);
    
    for (var i = 0; i < 3; i++ ) {
        ellipse( 
            x + distance + i*distance, 
            y + size/2, 
            windowWidth, 
            windowWidth );
    }
}















