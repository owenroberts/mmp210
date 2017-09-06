// image
var img;
var w = 200, h = 100;
function setup() { 
    createCanvas(640, 360);
    img = loadImage("../imgs/cat.png");
}
function draw() {
    background('black');
    for (var x = 0; x < width; x += w) {
        for (var y = 0; y < height; y += h) {
            image(img, x, y, w, h);
        }
    }
    //tint(255);
    //image(img, 0, 0, mouseX, mouseY);
   // tint(0,255,255);
    image(img, mouseX, mouseY, 200, 150);
}
