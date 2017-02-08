var dead = false;

var player;
var speed = 10;
var jump = 20;
var jumping = false;

var player_walk_sprites,
    player_walk,
    player_stand_sprites,
    player_stand;

var gravity = 1;

var platform, ground;
var obstacle, fire;

function preload() {
    player_walk_sprites = loadSpriteSheet("player.png", 40, 40, 4);
    player_walk = loadAnimation(player_walk_sprites);
    player_stand_sprites = loadSpriteSheet("player.png", 40, 40, 1);
    player_stand = loadAnimation(player_stand_sprites);
    
    fire = loadImage("fire.png");
    ground = loadImage("ground.png");
}

function setup() {
    createCanvas(720, 360);
    
    player = createSprite(100, 100);
  	player.draw = function() {
		ellipse(0, 0, 20, 20);
	}
    //player.debug = true;
    
    platform = createSprite(width/2, height, width, 20);
    platform.addImage(ground);
    //platform.debug = true;
    platform.setCollider("rectangle", 0, 0, width, 5);
    
    obstacle = createSprite(width, height/2, 60, 80);
    obstacle.addImage(fire);
    obstacle.setCollider("rectangle", 0, 0, 40, 60);
    //obstacle.debug = true;
    obstacle.velocity.x = -5;
}

function draw() {
    background("black");
    
    if (!dead) {
    
    if ( keyDown("space") && !jumping ) {
        player.velocity.y -= jump;
        jumping = true;
    }
    
    if ( keyDown("d") ) {
        obstacle.position.x -= speed;
        platform.position.x -= speed;
        player.changeAnimation("walk");
    } else {
        player.changeAnimation("stand");   
    }
    
    if ( platform.position.x < 0 ) platform.position.x = width/2;
    if ( obstacle.position.x < -obstacle.width ) obstacle.position.x = random(width, width*2);
    
    player.velocity.y += gravity;
    if ( player.collide(platform) ) {
        player.velocity.y = 0;
        if (jumping) jumping = false;
    }
    
    if ( player.collide(obstacle) ) {
        //player.remove();
        player.position.x = 100;
        player.position.y = 0;
        player.velocity.x = 0;
        dead = true;
    }
    
    drawSprites();
    } else {
        fill("white");
       text("You're dead", 100, 100); 
    }
}