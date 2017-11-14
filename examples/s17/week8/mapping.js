// interaction

function setup() { 
   createCanvas(640, 360);
}

function draw() {
    background('black');
    
    console.log(mouseY);
    
    var mapRedToWidth = map(mouseX, 0, width, 0, 255);
    var mapSizeToHeight = map(mouseY, 0, height, 10, 200);
    
    fill(mapRedToWidth, 0, 255);
    
    translate(width/2, height/2);
    ellipse(0, 0, mapSizeToHeight);
}