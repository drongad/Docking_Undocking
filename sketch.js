var bg_img, spacecraft_Animation, iss_img
var iss, spacecraft
var hasDocked = false

function preload(){
  iss_img = loadImage("iss.png")
  bg_img = loadImage("spacebg.jpg")
  spcecrft1 = loadImage("spacecraft1.png")
  spcecrft2 = loadImage("spacecraft2.png")
  spcecrft3 = loadImage("spacecraft3.png")
  spcecrft4 = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(800,500);
  spacecraft = createSprite(400,400)
  spacecraft.addImage(spcecrft1)
  spacecraft.scale = 0.3
  
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(iss_img)
  iss.scale = 0.9


}

function draw() {
  background(bg_img);  
  if(!hasDocked){

    if(keyDown("left")){
      spacecraft.addImage(spcecrft3) 
      spacecraft.x-=5
    }
    if(keyDown("right")){
      spacecraft.addImage(spcecrft4) 
      spacecraft.x+=5
    }
    if(keyDown("up")){ 
      spacecraft.y-=5
    }
    if(keyDown("down")){
      spacecraft.addImage(spcecrft2) 
  
    }
  
   
  }
  if(spacecraft.x >= 330 && spacecraft.y <=315){
    hasDocked = true
    textAlign(CENTER)
    textSize(30)
    fill("white")
    text("Docking successful",400,400)
    
  }
 
 
  drawSprites();
  
}