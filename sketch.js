
var bg, backgroundImg;
var ironMan;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironMan=loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.scale=2;
  bg.addImage(backgroundImg);

  iron=createSprite(150,500);
  iron.scale=0.5;
  iron.addImage(ironMan);

  ground=createSprite(200,585,400,10);
  ground.visible=false;
  



 
}

function draw() {
  if(keyDown("up")){
    iron.velocityY=-10;
  }
  if(keyDown("left")){
    iron.x=iron.x -5;
  }
  if(keyDown("right")){
    iron.x=iron.x +5;
  }
  iron.velocityY=iron.velocityY+0.5;
  iron.collide(ground);
  bg.velocityY=bg.velocityY-0.1;


  
 
    
    drawSprites();
   
}

