function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground = new Ground(600,height,1200,20);
}

function draw() {
  background(255,255,255);
  block1 = new block(330,235,30,40);
  block2 = new block(330,235,30,40);
  block3 = new block(330,235,30,40);
  block4 = new block(330,235,30,40);

  block5 = new block (360,195,30,40);
  block5 = new block (360,195,30,40);
  block5 = new block (360,195,30,40);

  block6 = new block (390,155,30,40);
  drawSprites();
}