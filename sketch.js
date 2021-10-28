var backImage,backgr;
var player, player_running;
var ground,ground_img;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacle_img;

var END =0;
var PLAY =1;
var gameState = PLAY;

var gameOver; 
var score=0;
var attempts=3;

function preload(){
  backImage=loadImage("jungle.jpg");
  // Student 1-Challenge 1-Load animation effect of monkey
  
  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png"); 
  gameOverImg = loadImage("gameOver.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
    

  player = createSprite(100,340,20,50);
// Student 1-Challenge 2-Add animation effect and scale 
  
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() { 
  background(0);
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 550,50);
  
  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(FoodGroup.isTouching(player)){
      FoodGroup.destroyEach();
      player.scale += 0.05
      score = score + 2;
    }
  //Student 2-Challenge 1-Use keyDown(space) to add jump effect
  //Student 2-Challenge 2- Add the gravity effect
  //student 2-Challenge 3-Collide the player to ground.

  //Student 3-Challenge 2-call the spawnFood()
  //student 4-Challenge 2-call the spawnObstacles()

    if(obstaclesGroup.isTouching(player)){ 
        gameState = END;
    }
  }else if(gameState === END){

    backgr.velocityX = 0;
    player.visible = false;
    
    FoodGroup.destroyEach();
    obstaclesGroup.destroyEach();

    textSize(30);
    fill(255);
    text("Game Over!", 300,220);
  }
}



function spawnFood() {
  //Student 3-Challenge 1-Do the following instruction
//Write code to spawn the bananas with a space interval.
//Add an image to the banana sprite and scale the banana accordingly.
//Give the banana some velocity and lifetime.
//Move the player.depth code inside frameCount
//Add the groups
    player.depth = banana.depth + 1;
    
}

//Student 4- Challenge 1-Do the following instruction
//Create a function for spawnObstacles()
//Write code to spawn the obstacles with a space interval.
//Add an image to the obstacles sprite and scale the obstacles accordingly.
//Give the obstacles some velocity and lifetime.
//Add the groups
