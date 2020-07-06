var skyImage;
var music;
var dashSound;
//Player
var x; 
var y;
var s=50; 
var speed=5;
var playerdie=false;
var startgame=true;
var score=0;
// Enemys
var Enemys=[];

function add(){
    Enemys.push({
        x:random(width),
        y:random(height),
        s:random(25, 50),
        xspeed:random(2, 10),
        yspeed:random(2, 10)
    });
}

function preload(){
    skyImage = loadImage("sky.jpg");
    music = loadSound("stage 13.mp3");
    dashSound=loadSound("dash.wav");
}

function setup() {
	createCanvas(640, 360);
    x= width/2;
    y= height/2;
    add();
}

function draw() {
    if(startgame){
        splash();
    }
    else if (playerdie){
        restart();
    }
    else{
        games();
    }
}

function splash() {
    text("Click to Start", width/2, height/2);
    if (mouseIsPressed){
        startgame=false;
    }
}

function restart(){
    text("Click to play again", width/2, height/2);
    if (mouseIsPressed){
        playerdie=false;
        x=width/2;
        y=height/2;
        Enemys=[];
        add();
        score=0;
    }
}

function games(){
	background(skyImage);
// Display Player
    fill('blue');
    ellipse(x, y, s);

// Move the Player
    if(keyIsPressed){
        if (keyCode==38){  // Up key
            y-=speed;
        }
        if (keyCode==40){ // Down key
            y+=speed;
        }
        if (keyCode==37){   // Left key
            x-=speed;
        }
        if (keyCode==39){   // Right key
            x+=speed;
        }
        if (keyCode == 49) {
        if (music.isPlaying()) {
            music.pause();
        } else {
            music.play();
        }
    } 
    }
// Display Enemys
    for (let i = 0; i<Enemys.length; i++){
        fill('red');
        var e= Enemys[i];
        ellipse(e.x, e.y, e.s);
        e.x+=e.xspeed;
        e.y+=e.yspeed;
        if (e.x<0 || e.x>width){
            e.xspeed *= -1;
        }
        if (e.y<0 || e.y>height){
            e.yspeed *=-1;
        }
// Ditect Player
    var d= dist(x, y, e.x, e.y);
        if (d< s/2 + e.s/2){
            playerdie=true;
            dashSound.play();
        }

    }
// Update score
    text(score,10,20);
    score+=1;
    if (score% 100==0){
        add()
    }
}