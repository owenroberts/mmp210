var meeImg;
var meeboxImg;
var meeboxImg2;
var meeboxImg3;
var meebocImg4;
var meeImg1;
var meeImg2;

function preload(){
    meeImg= loadImage("meseeks.jpg")
    meeboxImg=loadImage("Meeseeks_box.png")
    meeboxImg2=loadImage("Meeseeks_box.png")
    meeboxImg3=loadImage("Meeseeks_box.png")
    meeboxImg4=loadImage("Meeseeks_box.png")
    meeImg1=loadImage("Meeseeks_1.png")
    meeImg2=loadImage("meeseeks_2.png")
    meeImg3=loadImage("meeseeks_3.png")
    
}

function setup() {
    createCanvas(1000,500); 
    image(meeImg,0, 0, width,height);
}

function draw () {
    image(meeboxImg,0,400,100,100);
    image(meeboxImg2,900,400,100,100);
    image(meeboxImg3,0,0,100,100);
    image(meeboxImg4,900,0,100,100);
    
}


function mousePressed (){
    if (mouseX < 100 && mouseY > 400) {

        var r1 = random(900);
        var r2 = random(400);

        image(meeImg1, r1, r2, 100, 150)
    }
    
    if (mouseX > 900 && mouseY > 400) {
        
        var r1 = random(900);
        var r2 = random(400);
        
        image(meeImg2, r1, r2, 100, 150)  
    }
    
     if (mouseX < 100 && mouseY < 100) {
         
        var r1 = random(900);
        var r2 = random(400);
         
        image(meeImg3, r1, r2, 100, 150) 
    }
    if (mouseX > 900 && mouseY <100) {
        image (meeImg, 0, 0, width, height)
    }
    
  
    
    
    
    
}