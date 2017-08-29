function setup() {
    createCanvas(640, 640);
    background("white");
    
    var distance = 100;
    var w = distance - 20;
    var h = 200;
    
    for (var y = 10; y < height; y += h + 20) { 
        for (var x = 10; x < width - w; x += distance) {
            fill(0, y, x);
            drawWindow(x, y, w, h);
        }
    }
    
   
}

var drawWindow = function(x, y, w, h) {
    
    var margin = w/4;
    var mod = 2.5;
    
    rect(x, y, w, h);
    
    ellipse(x + margin, y + margin, margin, margin);
    
    ellipse(x + w - margin, y + margin, margin, margin);
    
    ellipse(x + margin, y + mod*margin, margin, margin);
    
    ellipse(x + w - margin, y + mod*margin, margin, margin); 
   
}

