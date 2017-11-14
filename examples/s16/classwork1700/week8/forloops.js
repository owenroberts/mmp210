function setup(){
    createCanvas(640, 640);
    background("white");
    
    noStroke();
    fill("green");
    rectMode(CENTER);
    
    translate(width/2, 0);
    rotate(45);
      
    var w = 100;
    
    for (var x = 0; x < width ; x += w) {
        for (var y = 0; y < height; y += w) {
                
            if ( x/100 % 2 == 0) {
                fill("green");
            } else {
                fill("blue");
            }  
            
            ellipse(x, y, w, w);
            stroke("white");
            rect(x - w/4, y, w/4, w/2);
            rect(x + w/4, y, w/4, w/2);
   
        }
    }
    
    
 
}