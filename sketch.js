var weight = 32
var speed = 223
var thickness = 30
var car,wall
var game="s1"
function setup() {
  createCanvas(800,400);
  car=createSprite(200, 200, 30, 15);
  wall=createSprite(700,200,thickness,height/2)
  wall.shapeColor="black"
  car.shapeColor="cyan"
  
}


function draw() {
  
  var deform = Math.round(0.5*weight*speed*speed/(thickness*thickness*thickness))
  
  background(255,255,255);  

  if(game==="s1"){
    fill("black")
    textSize(20)
    text("WEIGHT = "+weight,400,200)
    text("TYPE UPKEY TO INCREASE DOWNKEY TO DECREASE",200,300)
    text("SPACE TO DONE",400,250)
    wall.visible=false
    car.visible=false
    if(keyDown("up")){
weight=weight+10


    }
    if(keyDown("down")){
weight=weight-10



    }
    if(keyDown("space")){
    game="s2"

    }
      }
      if(game==="s2"){
        fill("black")
        textSize(20)
      text("SPEED = "+speed,400,200)
      text("TYPE UPKEY TO INCREASE DOWNKEY TO DECREASE",200,300)  
      text("W TO DONE",400,250)
      if(keyDown("up")){
        speed=speed+10
        
        
            }
            if(keyDown("down")){
        speed=speed-10
        
        
        
            }
            if(keyDown("w")){
            game="s4"
        
            } 
      }
      if(game==="s4"){
        fill("black")
        textSize(20)
        text("THICKNESS = "+thickness,400,200)
        text("TYPE UPKEY TO INCREASE DOWNKEY TO DECREASE",200,300)  
        text("SPACE TO DONE",400,250)
        if(keyDown("space")){
          game="s3"
        }
        if (keyDown("up")) {
          thickness=thickness+2
        }
        if(keyDown("down")){
          thickness=thickness-2
        }
       
      }
if(game==="s3"){
wall.visible=true
car.visible=true
fill("black")
textSize(20)
text("SPACE TO START",360,250)
if(keyDown("space")){
game="play"


}
}
if(game==="play"){
car.velocityX=speed/2
if(car.isTouching(wall)){
  car.shapeColor="red"
  car.velocityX=0
  fill("black")
  textSize(15)
  text("WALL IS DAMAGED PRESS W TO CONTINUE",150,200)

}

if(keyDown("w")&&game==="play"){
game="e"


}





}
if(game==="e"){
  car.visible=false
  wall.visible=false
  fill("black")
  textSize(20)
  text("THE WALL DAMAGE IS PRETTY BAD",200,250)
  text("DAMAGE = "+deform,250,300)
  
  }
  drawSprites();
}