// self portrait
function setup() { 
	createCanvas(640, 480);
	background("black");
	noStroke();
    
    // main colors
    var skinBase = color("lightblue");
    var faceParts = color("green");
        
    // face dimensions
    var eyeSize = 50;
    
    console.log("skin base", skinBase);
    console.log("face parts", faceParts);
    console.log("eye size", eyeSize);
	
	// head
	fill(skinBase);
	ellipse(300, 300, 300, 300);
	
	// eyes
	fill(faceParts);
	rect(175, 175, eyeSize, eyeSize);
	rect(275, 175, eyeSize, eyeSize);
	
	// mouth
	fill(faceParts);
	triangle(175, 400, 325, 425, 345, 380);
	
	// nose
	stroke(faceParts);
	strokeWeight(6);
	line(250, 245, 200, 350);

	// ear
	fill(skinBase);
    stroke(faceParts);
	arc(450, 280, 70, 90, PI+1, HALF_PI+1);
}