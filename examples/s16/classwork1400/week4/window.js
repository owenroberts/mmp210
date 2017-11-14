function setup() {
    createCanvas(640, 480);
    background("white");
    
    var x = 50;
    var y = 50;
    var w = 200;
    var h = 350;
    var m = 10;
    
    noStroke();
    fill("pink");
    rect( x, y, w/2, h );
    fill("lightgreen");
    rect(x + w/2, y, w/2, h);
    
    noFill();
    stroke("darkgray");
    strokeWeight(m);
    rect(x, y, w, h);
    
    stroke("darkblue");
    strokeWeight(m/2);
    
    rect( x + m, y + m, w/2 - m*2, h/2);
    rect(x + w/2 + m, y + m, w/2 - m*2, h/2);
    
}