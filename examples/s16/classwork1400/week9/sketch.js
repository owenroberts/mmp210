var numSpaceships = 20;
var x = [];
var y = [];
var speed = [];
var size = [];
var spaceShipColor = [];

function setup() {
    createCanvas(640, 480);
    for (var i = 0; i < numSpaceships; i++) {
        x[i] = random(0, width/2) ;
        y[i] =  random(0, height) ;
        /*x.push( random(0, width/2) );
        y.push( random(0, height) );*/
        speed.push( random(1, 4) );
        size[i] =  random(10, 100);
        
        var r = random(0, 255);
        var g = random(0, 255);
        var b = random(0, 255);
        
        spaceShipColor[i] = color(r, g, b);
    }
    console.log(x);
}
function draw(){
    background("white");
    for (var i = 0; i < numSpaceships; i++) {
        
        fill(spaceShipColor[i]);
        
        spaceship(x[i], y[i], size[i]);
        
        x[i] += speed[i];
        if (x[i] >= width) x[i] = 0;
    }
}



var spaceship = function(x, y, size) {
    var fin = size/12;
   /* fill(x, 0, y);*/
    triangle(x,y - fin,x,y + size/2 + fin,x + size, y + size/4);
    rect(x, y, size, size/2);
    arc(x + size, y + size/4, size, size/2, PI + HALF_PI, HALF_PI);
    for (var i = 1; i < 4; i++) {
        ellipse(x + i*size/3 , y + size/4, fin, fin);
    }
}
