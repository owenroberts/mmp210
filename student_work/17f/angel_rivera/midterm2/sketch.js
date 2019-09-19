function setup() {
	createCanvas(640, 480);
    
    design();
    
    
    

}
function design() {
    
    //background red
    var br = random(20, 80);
    
    //background green
    var bg = random(20, 80);
    
    //background blue
    var bb = random(0);
    
    //background
    background(br, bg, bb);
    
    //edge red
    var er = random(0, 100)
    
    //edge green
    var eg = random ( 0, 100)
    
    //edge blue
    var eb = random ( 0, 20)
    
    //edge no fill
    noFill();
    
    //edge thiccness
    strokeWeight(15);
    
    //edge color
    stroke(er, eg, eb);
    
    //the actual edge
    rect(0, 0, width, height)
    
    
    var x = 50;
    var space = 50;
    
     // for ( var x = 50; x < width; x += space ) {
    //     ellipse(x, height/2, 40);
    //  }
    
    var columnSize = width/5;
    var rowSize = height/4
    
    for (var x = 0; x <= width; x += columnSize) {
    
    
        for (var y = 0; y <= height; y += rowSize){
            strokeWeight(2);
            //red
            var r = random(90, 180)
        
            //green
            var g = random( 40, 130)
            
            //blue
            var b = random(0);
            
            //triangle color
            fill(r, g, b);
            
            stroke(br, bg, bb);
            
						var shape = Math.floor(random(0, 2));
            if (shape == 0){//main triangle
                
            
                
            triangle(x + 30, y + 75, x + 58, y + 20, x + 86, y + 75);
            
            //left upper triangle
            triangle(x + 25, y + 40, x + 47, y + 40, x + 30, y + 72);
            
            //right upper triangle
            triangle(x + 69, y + 40, x + 93, y + 40, x + 85, y + 72);
            
            //left lower triangle
            triangle(x + 10, y + 66, x + 25, y + 51, x + 30, y + 74);
            
            //right lower triangle
            triangle(x + 106, y + 66, x + 92, y + 51, x + 86, y + 74);
                
            strokeWeight(3);
                
            //vertical line
            line(x + 57.4, y + 10, x + 57.4, y + 102);
            
            //right diagonal
            line(x + 73, y + 20, x + 57.4, y + 80);
            
            //left diagonal
            line(x + 43, y + 20, x + 57.4, y + 80);
                
            //stem
            rect(x + 55, y + 75, 5, 25)
						}
            else if ( shape == 1){
            //circular leaf
            ellipse(x + 56, y + 66, 45, 75);
                
            strokeWeight(3);
            
            //vertical line
            line(x + 55.5, y + 26, x + 55.5, y + 102);
                
            //first row of diagonals
            line(x + 55.5, y + 26, x + 10, y + 102);
            line(x + 55.5, y + 26, x + 105, y + 102);
                
            //second row of diagonals
            line(x + 55.5, y + 46, x + 20, y + 102);
            line(x + 55.5, y + 46, x + 96, y + 102);
                
            //third row of diagonals
            line(x + 55.5, y + 71, x + 35, y + 102);
            line(x + 55.5, y + 71, x + 76, y + 102);
                
            //stem
            rect(x + 53, y + 9, 5, 20)
					}
            
            
    
    }
    
    }
}

function mouseClicked(){
    design();
}
