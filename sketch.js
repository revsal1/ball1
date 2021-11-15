var ball;
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if(keyDown("up")){
    ball.y-=3§;
  }

  if(keyDown("down")){
    ball.y+=3;
  }
drawSprites();
}




