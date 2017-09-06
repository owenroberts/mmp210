// grid 
function setup() { 
   createCanvas(640, 480);
}

function draw() {
    background(220);
    
    /* draw a grid */
    stroke("green");
    
    var numColumns = 10;
    
    var columnWidth = width / numColumns;
    var rowHeight = height / numColumns;
    
    for (var i = 1; i < numColumns; i++) {
        line(columnWidth*i, 0, columnWidth*i, height);
        line(0,rowHeight*i,width,rowHeight*i);
    }
}