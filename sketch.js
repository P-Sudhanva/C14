var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var Obs,Ob1,Ob2,Ob3,Ob4,Ob5,Ob6;
var cloud, cloudsGroup, cloudImage;



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 Ob1=loadImage("obstacle1.png");
 Ob2=loadImage("obstacle2.png");
 Ob3=loadImage("obstacle3.png");
 Ob4=loadImage("obstacle4.png");
 Ob5=loadImage("obstacle5.png");
 Ob6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstacles();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}
function spawnObstacles(){
  if(frameCount%80===0){
 Obs=createSprite(600,165,40,10);
 Obs.velocityX=-3;
 Obs.lifetime=200;
 var ran=Math.round(random(1,6));
  switch(ran){
    case 1:Obs.addImage(Ob1);
    break;
    case 2:Obs.addImage(Ob2);
    break;
    case 3:Obs.addImage(Ob3);
    break;
    case 4:Obs.addImage(Ob4);
    break;
    case 5:Obs.addImage(Ob5);
    break;
    case 6:Obs.addImage(Ob6);
    break;
    default:break;
  } 
  Obs.scale=0.4;
  }
}
