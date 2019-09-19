/*Self Portrait V.3 by Sebastian
interactive
*/ 

function setup() {
    createCanvas(640, 360);
}
    
function draw ()  {
    background(100);
    
    var x = 5;
    
    var faceSize = 300;
    var eyeSize = 50;
    var eyecolorSize = 35;
    var ReyecolorX = 372 + mouseX / 70;
    var ReyecolorY = 125 + mouseY / 70;
    var LeyecolorX = 212 + mouseX / 70;
    var LeyecolorY = 125 + mouseY / 70;   
    var pupilSize = 15;
    var lefteyex = 220;
    var eyeY = 130;
    var righteyex = 380;
    var hairColor = "brown";
    var skinColor = "tan";
    var headx = 300;
    var heady = 180;
    var hairx = 300;
    var hairy = 150;
    var eyeballcolor = "white";
    var eyecolor = mouseX;
    var pupilcolor = "black";
    var mouthcolor = "red";
    var mouthx = 265;
    var mouthy = 230;
    var mouthlength = 70;
    var mouthwidth = 20;
    var mouthcurve = 10;
    var nosex = 295;
    var nosey = 180;
    var noselength = 10;
    var nosewidth = 20;
    var LbrowX = 210;
    var LbrowY = 90 - mouseY / 40;
    var RbrowX = 370;
    var RbrowY = 90 - mouseY / 40;
    var LbrowLength = 30;
    var LbrowWidth = 10;
    var RbrowLength = 30;
    var RbrowWidth = 10;
    var wingsize = 10;
    var flybodysize = 10;
    var r = 100;
	var g = map(mouseX, 0, width, 0, 255); 
	var b = map(mouseY, 0, height, 0, 255); 

    
    
    
    //hair
    fill(hairColor);
    ellipse(hairx + x, hairy, faceSize);    
    
    
    //head
    fill(skinColor);
    ellipse(headx + x, heady, faceSize);
    //eyebrows
    fill("brown");
    rect(LbrowX, LbrowY, LbrowLength, LbrowWidth);
    rect(RbrowX, RbrowY, RbrowLength, RbrowWidth);
    //eyes
    fill(eyeballcolor);
    ellipse(lefteyex + x, eyeY, eyeSize);
    ellipse(righteyex + x, eyeY, eyeSize);
    fill(r, g, b)
    ellipse(LeyecolorX + x, LeyecolorY, eyecolorSize);
    ellipse(ReyecolorX + x, ReyecolorY, eyecolorSize);
    fill(pupilcolor);
    ellipse(LeyecolorX + x, LeyecolorY, pupilSize);
    ellipse(ReyecolorX + x, ReyecolorY, pupilSize);
    
    
    
    //mouth
    fill(mouthcolor)
    rect(mouthx + x, mouthy, mouthlength, mouthwidth, mouthcurve);
    fill("white")
    rect(270, 230, 70, 10)
    
    //nose
    fill(skinColor)
    rect(nosex + x, nosey, noselength, nosewidth);
    
      

    //fly
    fill("gray")
    ellipse(mouseX - 5, mouseY - 5, wingsize)
    ellipse(mouseX - 5, mouseY + 5, wingsize)
    ellipse(mouseX + 5, mouseY - 5, wingsize)
    ellipse(mouseX + 5, mouseY + 5, wingsize)
    fill("black")
    ellipse(mouseX, mouseY, flybodysize)

      
} 

