const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var SuperIdol;

function preload(){
    //super idol
    SuperIdol = loadImage("super idol.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //fileira 1
    box1 = new Box(650,370,50,50);
    box2 = new Box(800,370,50,50);
    torresmin1 = new Torresmo(725,370);
    taubate1 = new Tauba(725,350,220,PI/2);
    //fileira 2
    box3 = new Box(650,270,50,50);
    box4 = new Box(800,270,50,50);
    torresmin2 = new Torresmo(725,270);
    taubate2 = new Tauba(725,260,220,PI/2);
    //fileira 3
    box5 = new Box(725,220,50,50);
    taubate3 = new Tauba(650,160,120,PI/7);
    taubate4 = new Tauba(790,160,120,PI/-7);
    //chão
    ground = new Ground(600,height,1200,20);
    //bem te vi
    passarro = new pessego(120, 195);
    //tacaleopaunomenino
    //taubate5 = new Tauba(200,200,40,PI/2);
    restrisaum = new TACALEOPAU(passarro.body,{x:118,y:217});
}
//dreu
function draw(){    
    background(SuperIdol);
    Engine.update(engine);
    //fileira1
    box1.display();
    box2.display();
    torresmin1.display();
    taubate1.display();
    //fileira2
    box3.display();
    box4.display();
    torresmin2.display();
    taubate2.display();
    //fileira3
    box5.display();
    taubate3.display();
    taubate4.display();
    //chin
    ground.display();
    //andorinha
    passarro.display();
    fill(255);
    stroke(0);
    text(Math.round(mouseX) + "," + Math.round(mouseY), mouseX, mouseY);
    //tacaleopaunomeninoemorreu
    //taubate5.display();
    restrisaum.display();
}

//arrasta o menino, esfrega o menino
function mouseDragged() {
    Matter.Body.setPosition(passarro.body,{x:mouseX,y:mouseY})
}

//tacaleomeninononpau
function mouseReleased() {
    restrisaum.fly()
}