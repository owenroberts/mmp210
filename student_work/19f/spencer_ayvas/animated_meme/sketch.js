/* cool meme
  10.3.2019
  picture credit: sillyswampghost please dont sue me im a student and not making money off of this thanks*/

var x = 320;
var y = 180;
var z = 100;
var memescale = 2.5;

var meme;

function preload() {
    meme = loadImage("images/sillyswampghost.jpg")

}

function setup() {
    createCanvas(480, 480);
    var canvas = createCanvas(480, 480);
    canvas.drawingContext.miterLimit = 1;
}

function draw() {
    background('lightblue');
push();
    translate(width / 2, height / 2);
    scale(memescale);
    memescale += 0.01;
    
    if(memescale > 5) {
        memescale = 2.5;
    }

    image(meme, -width/2 - 20, -100, width, height)
    
pop();
    var caption = "what my cat sees when i come into the kitchen at 2 am to eat shredded cheese straight out of the bag";
    textAlign(CENTER, CENTER);
    textSize(30);
    fill('white');
    stroke('black');
    strokeWeight(5);
    textStyle(BOLD);
    textFont("Mansalva");
    
    
    text(caption, 0, 150, 480, 480);



    //animation

    /* fill(r, g, b);
     ellipse(x, y, 100, 100);
     x += speed;
     y += speed;
     if (x > width || x < 0) {
         speed *= -1;
     } else if (y > height || y < 0) {
         speed *= -1;
     }*/




}
