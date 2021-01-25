const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;      
var score = 0;
var bg;
var backgroundImg;

function preload() {
    // getBackgroundImg()
}
function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg()

    ground1 = new Ground(625,480,280,20)
    ground2 = new Ground(1085,290,280,20)

    hexagon = new Hexagon(148,302,50,50)

    catapault = new Catapault(hexagon.body,{x:148, y:302});
    
//layer1
    box1 = new Box(520,450,30,30)
    box2 = new Box(550,450,30,30)
    box3 = new Box(580,450,30,30)
    box4 = new Box(610,450,30,30)
    box5 = new Box(640,450,30,30)
    box6 = new Box(670,450,30,30)
    box7 = new Box(700,450,30,30)
    box8 = new Box(730,450,30,30)

    box9 = new Box(550,430,30,30)
    box10 = new Box(580,430,30,30)
    box11 = new Box(610,430,30,30)
    box12 = new Box(640,430,30,30)
    box13 = new Box(670,430,30,30)
    box14 = new Box(700,430,30,30)

    box15 = new Box(580,410,30,30)
    box16 = new Box(610,410,30,30)
    box17 = new Box(640,410,30,30)
    box18 = new Box(670,410,30,30)

    box19 = new Box(610,390,30,30)
    box20 = new Box(640,390,30,30)
//layer2
    box21 = new Box(980,260,30,30)
    box22 = new Box(1010,260,30,30)
    box23 = new Box(1040,260,30,30)
    box24 = new Box(1070,260,30,30)
    box25 = new Box(1100,260,30,30)
    box26 = new Box(1130,260,30,30)
    box27 = new Box(1160,260,30,30)
    box28 = new Box(1190,260,30,30)

    box29 = new Box(1010,230,30,30)
    box30 = new Box(1040,230,30,30)
    box31 = new Box(1070,230,30,30)
    box32 = new Box(1100,230,30,30)
    box33 = new Box(1130,230,30,30)
    box34 = new Box(1160,230,30,30)

    box35 = new Box(1040,200,30,30)
    box36 = new Box(1070,200,30,30)
    box37 = new Box(1100,200,30,30)
    box38 = new Box(1130,200,30,30)

    box39 = new Box(1070,170,30,30)
    box40 = new Box(1100,170,30,30)
}

function draw(){

    if(backgroundImg){
    backgroundImg.resize(windowWidth, windowHeight)
    background(backgroundImg);
    }

Engine.update(engine)

ground1.display();
ground2.display();

catapault.display();

hexagon.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();

box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();
box31.display();
box32.display();
box33.display();
box34.display();
box35.display();
box36.display();
box37.display();
box38.display();
box39.display();
box40.display();

textSize(30)
text("Score : "+score,750,40)
box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();
box21.score();
box22.score();
box23.score();
box24.score();
box25.score();
box26.score();
box27.score();
box28.score();
box29.score();
box30.score();
box31.score();
box32.score();
box33.score();
box34.score();
box35.score();
box36.score();
box37.score();
box38.score();
box39.score();
box40.score();

}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    catapault.fly();
}

function keyPressed(){
    if(keyCode === 32){
        catapault.attach(hexagon.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")

    var responseJson = await response.json()

    var dateTime = responseJson.datetime

    var hour = dateTime.slice(11,13)

    if (hour >= 06 && hour <=15){
        bg = "sprites/bg.png"
    } 
    else{
        bg = "sprites/bg2.jpg"
    }
   
    backgroundImg = loadImage(bg)
  
}