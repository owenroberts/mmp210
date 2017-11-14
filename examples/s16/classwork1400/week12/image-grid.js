var img;
var w = 100, h = 75;
function setup() {
    createCanvas(640, 480);
    img = loadImage("cat-small.jpg");
}
function draw() {
    background("white");
    
    for (var x = 0; x < width; x += w) {
        for (var  y = 0; y < height; y+= h) {
            image(img, x, y, w, h); 
        }
    }

}