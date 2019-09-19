var duck;
var T = "here comes quackers";
function preload() {
   duck = loadImage("killer_duck.jpg");
}


function setup() {
    frameRate(10);
	createCanvas(700, 500);
}
 function draw(){
     background(220);
     var step = frameCount % 10; 
     text(T, 50, 50);
     translate(280, 250);
     var p = frameCount / 50 * PI;
     var o = frameCount / 500 * PI;
     scale(o);
     rotate(p);
     applyMatrix(0.5 / step, 0, 0, 0.5 / step, 0, 0);
     image(duck, -412, -200);
     fill("black");
     textSize(20);
	 //text(T, 50, 50);
     
 }

    
	
	
	
	
	
	
	