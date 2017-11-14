function setup() {
	createCanvas(640, 480);
	background("white");
}
function draw(){
    /*background("white");*/
    push();
    translate(width/2, height/2);
    rotate(frameCount/10);
    
    ellipse(100, 100, 40, 40);
    pop();
    
    push();
    translate(frameCount/2, 0);
    //rect(100, 200, 40,40);
    pop();
    
    push();
    translate(width/2, height/2);
    scale(frameCount/4 , frameCount/4);
    noFill();
    //ellipse(0, 0, 20, 20);
    pop();
    
    push();
    textSize(100);
    translate(width/2, height/2);
    textAlign(CENTER);
    fill("green");
    stroke("white");
    rotate(frameCount/5 * PI/32);
    text("MMP 210", 0, 0);
    pop();
    
}