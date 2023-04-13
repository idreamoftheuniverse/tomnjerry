var rat
var ratImg
var cat
var catImg
var gunImg
var gun
var catSound
function preload(){
ratImg = loadImage('rat.png')
catSound = loadSound('cat.mp3')
gunImg = loadImage('gun.png')
catImg = loadImage('cat.png')
}

function setup() {
  createCanvas(1309,730);
  

  cat = createSprite(800,300);
  cat.addImage('cat',catImg);
  cat.scale = 0.03;
  //cat.setCollider("circle",0,0,100)

  gun = createSprite(1100,300);
  gun.addImage('gun',gunImg);
  gun.scale = 0.08;
  cat.debug = true;
  rats = new Group()
}

function draw() 
{
  background(30);
  cat.rotation = cat.rotation +10;
  gun.rotation = gun.rotation +10;
  
  if(keyDown('left')){
    cat.x = cat.x-5;
  }
  if(keyDown('right')){
    cat.x = cat.x+5;
  }
  if(keyDown('up')){
    cat.y = cat.y-5;
  }
  if(keyDown('down')){
    cat.y = cat.y+5;
  }
if(cat.isTouching(rats)){
  catSound.play();
}
else{
  catSound.stop();
}
  

spawnRats();

  drawSprites()
}

function spawnRats(){
if(frameCount%50 ==0){
  rat = createSprite(300,300);
  rat.x= Math.round(random(0,1400))
  rat.y= Math.round(random(0,700))
  rat.rotation = rat.rotation +10;
  rat.addImage('rat',ratImg);
  rat.scale =0.3
  rat.debug=true
  rat.setCollider("circle",0,0,30)
  rats.add(rat)
}
}




