

var galaxy;
var sun;
var earth;
var exoplanets2;



function setup(){
createCanvas(1710, 1000, WEBGL);
    galaxy = loadImage("galaxy.jpg");
    sun = loadImage("Exoplanets.jpg");
    earth = loadImage("earth.jpg");
    exoplanets2 = loadImage("Exoplanets2.png");
}


function draw() {
 texture(galaxy);
    push();
    translate(0, 0, -1000);
    plane(2000, 1100);
    pop();
        
  var radius = width * 0.5;
  
  //drag to move the world.
  orbitControl();

  normalMaterial();
  translate(0, 0, -600);
  for(var i = 0; i <= 5; i++){
    for(var j = 0; j <= 5; j++){
        
      push();
        
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
        texture(sun);
        sphere(250);
       
      var a = j/3 * PI;
      var b = i/3 * PI;
        
      translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2 , cos(5 * a) * radius * sin(b));    
      if(j%2 === 0){
          texture(exoplanets2);
        sphere(50);
      }else{
          
          push();
          texture(earth);
          sphere(50);
          pop();
      }
          
        
      pop();
    }
  }
}
