var r = 255, g = 255, b = 0;
var x = 100, y = 100, w = 200, h = 100;

function setup() {
    createCanvas(720, 360);
}
function draw() {
    background("black");
    
    fill(r, g, b);
    
    rect(x, y, w, h);

}
function mousePressed() {
    if ( mouseX > x && mouseX < x + w
       && mouseY > y && mouseY < y + h) {
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
    }
}