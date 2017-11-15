function setup(){
    createCanvas(640, 640);
    background("#f3f8b5");
    
    var size1 = 40;
    var space = size1*3;
    var size2 =80;
    
    for (var x = 70; x <= width; x += space) {
        for (var y = 75; y < height; y += space ) {
            var r = random(0,255);
            var g = random(0,255);
            var b = random(0,255);
            fill(r, g, b); 
            
            triangle(x-20, y-35, x+7, y+40, x+30, y-35);
            fill("green");
            rSize=random(size1/10,size1/2)
            ellipse(x-5, y-40, rSize, size2/3);
            ellipse(x, y-45, rSize, size2/3);
            ellipse(x+5, y-40, rSize, size2/3);
            
            line(x-5, y, x+10, y);
             line(x-7, y+5, x+10, y+5);
        }
    }
    for (var x = 70; x <= width; x += space) {
        for (var y = 75; y < height; y += space ) {
            noStroke();
            rSize=random(size1/10,size1)
            rPosition=random(x+24, x+65)
            rPosition1=random(y,y-150)
            fill("#f3f8b5")
            ellipse(rPosition, rPosition1, rSize, rSize);
            
        }
    }
}