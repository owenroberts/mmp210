var bg;
var rotX=0;
var rotY=0;

function setup(){
  createCanvas(1000, 439, WEBGL);
  earth = loadImage("earth.jpg");
  mars = loadImage("mars.jpg");
  jupiter = loadImage("jupiter.jpg");
  saturn = loadImage ("saturn.jpg");
  uranus = loadImage("uranus.jpg");
  neptune = loadImage("neptune.jpg");
  pluto = loadImage("pluto.jpg");
  me = loadImage("me.jpg");
    
  bg = loadImage("back.jpg");  
    
  perspective(60 / 180 * PI, width/height, 0.5, 439);
}

function draw(){
  background(0);
  texture(bg);
  plane(width,height);
    
  planet(-700,90,earth);
    
  planet(-510,50, mars);
    
  planet(-250,150,jupiter);
    
  planet(75,110,saturn);

  planet(320,70,uranus);
    
  planet (550,70,neptune);
        
  planet(740,30,pluto);
    
  planet(-900,25,me);    

    if (mouseX > width/2) {
    background("black");
    /*var r = random(0,500);
    var g = random(0,300);
    var b = random(0,100);     
    background(r, g, b);*/
  
    } else {
    texture(me);
    }
    
      
orbitControl();
for(var i = -1; i < 2; i++){
for(var j = -2; j < 3; j++){
push();
translate(i*340, 0, j*160);
sphere(18, 18, 18);
 rotateX(frameCount * 0.03);
 rotateY(frameCount * 0.03);    
    
  if (mouseX > width/2) {
    sphere(30, 30, 30);    
} else {
    sphere(18, 18, 18);
}    
pop();
}
}
}


var planet = function(xpos, size, tex) {
  push();
  translate(xpos,0,0); 
  rotateZ(frameCount * 0.015);
  rotateX(frameCount * 0.015);
  rotateY(frameCount * 0.015);
  rotateX(rotX);
  rotateY(rotY);
  texture(tex);
  sphere(size);
  pop();

}

function mouseDragged() {
    rotX = mouseX / 10;
    rotY = mouseY / 10;
    
    
}




