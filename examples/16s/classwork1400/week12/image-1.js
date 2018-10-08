var img;
function setup() {
    createCanvas(640, 480);
    img = loadImage("cat-small.jpg");
}
function draw() {
    background("white");
    image(img, 0, 0);
    
    tint(255, 127);
    image(img, 0, 0, mouseX, mouseY);   
}