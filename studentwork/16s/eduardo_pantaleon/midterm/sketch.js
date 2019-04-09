var r;
var g;
var b;
var ran;
function setup() {
    createCanvas(640, 480);
    background("white");
    noStroke();
    translate(width/2,height/2)
    
    var ran = 0;
    for (var x = 0; x < width; x++) {
    rotate(360);
        ran += random(-5,5);
        
        var r = random(0,200);
        var g = random(0,255);
        var b = random(0,100);
        
        
            //stroke(0,x,x);
        line(x + ran, 0, x , height);   
        line(x , 0, x + ran, height); 
        
        
       if (x < width/2) {
            stroke(r, g, 0);
        } else {
            stroke(r,g,0);
        }
    } 
    
   // push();
    var w = 75;
    fill(0);
    ellipse (0, 0, w, w);
    for (var i = 0; i < width; i++) {
        
        if (i < width/4){    
        stroke(r,i,i);
        } else {
        stroke(r,g/3,i) 
        }
        
    rotate(360);
    fill(i,g,b);    
    rect(i + ran , i, i ,height);
    }
   // pop();
    
}