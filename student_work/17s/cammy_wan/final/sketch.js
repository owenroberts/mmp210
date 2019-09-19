var clickSound;
var mouseClickCount=0;
var press=false;
var changeColor=false;

//outside circle starting X,Y
var xOutside=0;
var yOutside=-200;

//size setups
var gridSmall=40;
var gridLarge=75;
var mouseSize=15;
var sizeDifference=5;
var sizeSmall=15;

//out circles number
var circleNum=16;

//color RBG of the circles
var outCircleR=200;
var outCircleG=230;
var outCircleB=230;
var midCircleR=255;
var midCircleG=255;
var midCircleB=60;
var inCircleR=255;
var inCircleG=200;
var inCircleB=70;

// circles rotate time cycle
var outCycle=800;
var midCycle=600;
//color setups
var mouseColor='#fc00af ';
var backgroundColor='#FFD1CF';
var colorDifference=5;

function preload(){
   clickSound = loadSound ("sound.wav");
}

function setup() {
    createCanvas(1200,600);
    noCursor(); 
}

function draw() {
    background(backgroundColor);
    translate(mouseX,mouseY);
    
    noStroke();
    
    if (press) {
    sizeBigger();} else {sizeSmaller();} //interactions of mouse being pressed and released
    
    if(pow(-1,mouseClickCount)<0){
        outCircleR=255;        
        outCircleB=150;
        midCircleR=200;
        midCircleG=230;
        inCircleR=100;
          inCircleG=200;
        backgroundColor='#FFD1CF';
    }else{outCircleR=200;
          outCircleB=230;
         midCircleR=255;
          midCircleG=255;
         inCircleR=255;
          inCircleG=200;
          backgroundColor='#BEFFEA';} // color change when mouse click
    
    for (var i = 0; i < circleNum; i++) {
        fill(outCircleR,outCircleG-sizeDifference*i,outCircleB);
        if (frameCount%outCycle<outCycle/2) {
        rotate(PI/8);
ellipse(xOutside+frameCount%outCycle,yOutside+frameCount%outCycle, gridLarge-i*sizeDifference);}
        else{
        rotate(PI/8);
    ellipse(xOutside+outCycle-frameCount%outCycle,yOutside+outCycle-frameCount%outCycle, gridLarge-i*sizeDifference);}
    } //outside round of circles
    
    
        for (var i = 0; i < circleNum/2; i++) {
         fill(midCircleR,midCircleG,midCircleB+colorDifference*4*i);
            if (frameCount%midCycle<midCycle/2) { 
             rotate(PI/4);
        ellipse(frameCount%midCycle,frameCount%midCycle-gridSmall*3,          gridSmall+sizeDifference*i);}
            else{
        rotate(PI/4);
        ellipse(midCycle-frameCount%midCycle,midCycle-frameCount%midCycle-gridSmall*3, gridSmall+sizeDifference*i);}
    } // middle round of circles
     
   
        for(var x=-gridSmall; x<gridSmall*2; x+=gridSmall) {
        for(var y=-gridSmall;y<gridSmall*2;y+=gridSmall){
           push(); 
            rotate(PI*frameCount/360);
            innerCircle(x,y,sizeSmall,i);
           pop();
        }
    }  // 9 small circles

     fill(backgroundColor);
    ellipse(0,0,gridSmall);
    fill(mouseColor);
    triangle(0,-mouseSize,0,0,mouseSize,mouseSize);
    triangle(0,-mouseSize,-mouseSize,mouseSize,0,0); // mouse drawing
    

    
}

var innerCircle = function(x,y,sizeSmall,i){
    i=x/gridSmall+y/gridSmall+2;
    fill(inCircleR,inCircleG,inCircleB*i);
    ellipse (x,y,sizeSmall+i*sizeDifference);
    
} // draw inner circle function

function mousePressed() {
    press=true;
  
}

function mouseReleased(){
    press=false;
   
}

function sizeBigger(){
    var max= 70;
    if (gridSmall<max){gridSmall++;}
    else{gridSmall=max;}
    if(gridLarge<max*2){gridLarge++;}
    else{gridLarge=max*2;}
    if (sizeSmall<max/2){sizeSmall++;}
    else{sizeSmall=max/2;}  //size gets bigger when mouse pressed
}

function sizeSmaller(){
    if (gridSmall>40){gridSmall--;}
    else{gridSmall=40;}
    if(gridLarge>75){gridLarge--;}
    else{gridLarge=75;}
    if (sizeSmall>15){sizeSmall--;}
    else{sizeSmall=15;}  // size gets smaller when mouse released
}

function mouseClicked(){
    clickSound.play();
    mouseClickCount++;
}  //count how many times the mouse has clicked

