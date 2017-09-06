function setup(){
    createCanvas(640, 480);
    background("white");
     
    var columns = 3;
    var rows = 2;
    
    var x = (width/columns) / 2;
    var y = (height/rows) / 2;
    var r = 20;
    
    for (var i = 0; i < columns * rows; i++) {
        
        fill( x, y, i );
        
        ellipse(x, y, r, r);
        //rect(x, y, r, r);
        
        x += width/columns;
    
        if (x > width) {
            x = (width/columns) / 2;
            y += height/rows;
        }
    }
        
}