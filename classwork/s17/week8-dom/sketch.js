// dom button
var x = 20, y = 20;
var speed = 5;
function setup() {
    var canvas = createCanvas(640, 480);
    canvas.parent("container");

}
function draw() {
    background('black');
    ellipse(x,y,30);
}

function keyPressed() {
   if (keyCode == RIGHT_ARROW) {
        x += speed;   
   } else if (keyCode == LEFT_ARROW) {
       x -= speed;
   } else if (keyCode == DOWN_ARROW) {
       y += speed;
   } else if (keyCode == UP_ARROW) {
       y -= speed;
   }
}