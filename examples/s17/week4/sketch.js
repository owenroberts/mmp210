// system variables
var ellipseWidth = 0;
var shapeSize = 100;
function setup() { 
   createCanvas(640, 360);
}

function draw() {
    background(50);
    
     /* draw a grid */
    stroke("green");
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
    
    
    if (mouseX != pmouseX) {
        if (shapeSize != 0) {
            shapeSize -= 0.05;
        }
    }
    console.log(shapeSize);
    
    ellipse(mouseX, mouseY, shapeSize, shapeSize);
    
    if (mouseX < width/2){
        fill("lightblue");
        rectMode(CENTER);
        rect(pmouseX, pmouseY, shapeSize/2, shapeSize/2);
    } else {
        fill("red"); 
        ellipse(pmouseX, pmouseY, shapeSize/2, shapeSize/2);
    }
    
    
    
    
    

    if ( ellipseWidth < width/2 ) {
        ellipseWidth ++;   
    } else {
         ellipseWidth = 0;
    }
   
    fill(frameCount, 0, 255);
    ellipse(width/2, height/2, ellipseWidth,frameCount/2);
}