// with variables 9/17


var mouthSize = 70; //mouth size
var x = 250; //x position
var y = 30;   //y position
var r = 250; // red
var g = 250; // green
var b = 250; // blue
function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(255);

//    var x = 250 + sin(frameCount/10)* 50;  //face animation about the x axis
//	var y = 50 + cos(frameCount/10) * 50;  //face animation about the y axis
//	r = 200+ sin(frameCount/5) * 100; //color shifting
//    g = 200+ sin(frameCount/5) * 100; //color shifting
//	mouthSize = 1/tan(frameCount/20) * 50;  //mouth animation
	
	fill(r+5,g-75,b-150)
    stroke(0)
 //    beginShape(QUAD_STRIP);  //face commenting out for now may look to reintegrate
	// vertex(250,30) 
 //    vertex(340,40)
	// vertex(400,70) 
	// vertex(400,130) 
 //    vertex(400,220) 
 //    vertex(400,350) 
 //    vertex(325,380) 
 //    vertex(175,380) 
 //    vertex(100,350) 
 //    vertex(100,130) 
 //    vertex(100,70) 
 //    vertex(160,40)
 //    vertex(250,30) 
 //    endShape(CLOSE);
    beginShape(QUADS);  //face 2
    vertex(x,y) 
    vertex(x+90,y+10)
    vertex(x+150,y+40) 
    vertex(x+150,y+100) 
    vertex(x+150,y+190) 
    vertex(x+150,y+320) 
    vertex(x+75,y+350) 
    vertex(x-75,y+350) 
    vertex(x-150,y+320) 
    vertex(x-150,y+100) 
    vertex(x-150,y+40) 
    vertex(x-90,y+10) 
    vertex(x,y) 
    endShape(CLOSE);

    fill(r-131,g-80,b-196);

    beginShape(QUADS);
    vertex(x-50,y+50)  //beginning of left eye
    vertex(x-30,y+70) 
    vertex(x-30,y+90) 
    vertex(x-50,y+110) 
    vertex(x-70,y+110) 
    vertex(x-90,y+90) 
    vertex(x-90,y+70) 
    vertex(x-70,y+50)
    vertex(x-50,y+50) 
    endShape(CLOSE); // end of left 

    fill(r-250,g+5,b+5)

    beginShape();
    vertex(x+70,y+50) //22 beginning of right eye
    vertex(x+90,y+70) 
    vertex(x+90,y+90) 
    vertex(x+70,y+110) 
    vertex(x+50,y+110) 
    vertex(x+30,y+90) 
    vertex(x+30,y+70) 
    vertex(x+50,y+50)
    vertex(x+70,y+50) //28 end of right eye
    endShape(CLOSE);
	
    fill(r+5,g+5,b-150);

    beginShape(TRIANGLE_STRIP); //right ear begins clockwise from left most point on ear
    vertex(x+130,y+150); 
    vertex(x+150,y+100);
    vertex(x+170,y+70);
    vertex(x+200,y+90);
    vertex(x+200,y+120);
    vertex(x+150,y+190);
    vertex(x+170,y+140);
    endShape(CLOSE);
    beginShape(TRIANGLE_STRIP); // left ear begins clockwise from lowest point on ear
    vertex(x-150,y+190);
    vertex(x-200,y+120);
    vertex(x-200,y+90);
    vertex(x-180,y+70);
    vertex(x-150,y+90);
    vertex(x-120,y+150);
    vertex(x-150,y+170);
    endShape(CLOSE);
    
    stroke(0)
    fill(r-100,g-230,b+150)

    beginShape(QUAD_STRIP) // nose
    vertex(x,y+140);
    vertex(x+20,y+170);
    vertex(x,y+200);
    vertex(x-20,y+170);
    vertex(x,y+140);
    endShape(CLOSE); // end nose

    fill(r-250,g-250,b+5)

if (mouseIsPressed) {
    mouthSize = 1/tan(frameCount/20) * 50;
    circle(250,280,mouthSize); //mouth
    } else  {
    circle(250,280,70); //mouth
    }
if (keyIsPressed && keyCode === 83) {
    r = 200+ sin(frameCount/5) * 100;
    g = 200+ sin(frameCount/5) * 100;
    b = 200+ sin(frameCount/5) * 100;
    
}    else {
    r = 250;
    g = 250;
    b = 250;
}
   
}


// this is a comment