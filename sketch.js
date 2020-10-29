var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var survivalTime = 0;
var score;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500,500);

monkey = createSprite(100,400,20,20);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1;

ground = createSprite(400,400,900,10);
  
FoodGroup = createGroup();
obstacleGroup = createGroup();

}


function draw() {
background("lightGrey");
stroke("white");
textSize(20);
fill("white");
text("Score: "+ score, 500,50);

stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
text("Survival Time: "+ survivalTime, 100,50);
  if(keyDown("space") && monkey.y > 200){
    monkey.velocityY = -7.5;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
food();
obstacles();
drawSprites();
}
function food(){
if(frameCount% 80 === 0){
var banana = createSprite(500,290,20,20);
banana.velocityX = -3;
banana.addImage(bananaImage);
banana.scale = 0.1;
banana.y = Math.round(random(150,300));
  
banana.setLifetime = 100;

FoodGroup.add(banana);
  }
}

function obstacles(){
if(frameCount% 300 === 0){
  var obstacle =  createSprite(400,380,20,20);
  obstacle.velocityX = -4;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.y = Math.round(random(330,380));
  obstacle.setLifetime = 100;
  
obstacleGroup.add(obstacle);
  }
}




