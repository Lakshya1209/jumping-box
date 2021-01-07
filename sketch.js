var block;
var surface1,surface2,surface3,surface4;



var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
 createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(200,700,100,30);
surface1.shapeColor = "red";

surface2 = createSprite(400,700,100,30);
surface2.shapeColor = "green";

surface3 = createSprite(600,700,100,30);
surface3.shapeColor = "blue";

surface4 = createSprite(800,700,100,30);
surface4.shapeColor = "purple"


    //create box sprite and give velocity
block = createSprite(random(20,750),400,50,50);
block.velocityX= 4;



}

function draw() {
    background(0);






    //add condition to check if box touching surface and make it box

    

    if(surface1.isTouching(block) && block.bounceOff(surface1)) {
        block.shapeColor = "red";
    }

    if(surface2.isTouching(block) && block.bounceOff(surface2)) {
        block.shapeColor = "green";
    }

    if(surface3.isTouching(block) && block.bounceOff(surface3)) {
        block.shapeColor = "blue";
    }

    if(surface4.isTouching(block)&&block.bounceOff(surface4)) {
        block.shapeColor = "purple";
    }
    drawSprites();
}