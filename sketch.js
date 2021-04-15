var cat;
var catAnimation;
var mouse;
var mouseAnimation;
var bckgrnd;
var bckImg; 

function preload() {


bckImg = loadImage("images/garden.png")
catAnimation = loadAnimation("images/cat2.png", "images/cat3.png");
mouseAnimation = loadAnimation("images/mouse2.png", "images/mouse2.png");
catImg1 = loadImage("images/cat1.png");
catImg2 = loadAnimation("images/cat4.png");
mouseImg1 = loadImage("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    
    bckgrnd = createSprite(0,0,1000,800);
    bckgrnd.addImage(bckImg);
    bckgrnd.scale = 1.5

    cat = createSprite(20,20,800,400);
    cat.addImage(catImg1);
    cat.scale = 0.1

    mouse = createSprite(20,20,200,400);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.1

}

function draw() {
    background(255);

    if(keyWentDown("LEFTARROW")){
        cat.addAnimation("runningcat",catAnimation);
        cat.velocityX = -2;
        mouse.addAnimation("singingmouse",mouseAnimation);
    }

    if(keyWentUp("LEFTARROW")){
       cat.addImage(catImg1);
       mouse.addImage(mouseImg1);
       cat.velocityX = 0
    }

    if(cat.isTouching(mouse)){
     cat.addImage(catImg2);
     mouse.addImage(moouseImg2);
    }
    drawSprites();
}