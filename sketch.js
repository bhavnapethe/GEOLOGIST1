const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var bluecircle;
var blacksquare;
var balls, balls1, balls2, balls3, balls4;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    bluecircle = new Rubber(900, 70, 50);

    blacksquare = new Stone(200,200,45,20);

    balls = new Iron(900,200,50);
    balls1 = new Iron(800,200,40);
    balls2 = new Iron(700,200,40);
    balls3 = new Iron(600,200,40);
    balls4 = new Iron(500,200,40);
    balls5 = new Iron(400,200,40);
    balls6 = new Iron(300,200,40);
    balls7 = new Iron(450,200,40);
    balls8 = new Iron(350,200,40);
    balls9 = new Iron(290,200,40);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    bluecircle.display();
    blacksquare.display();
    balls.display();
    balls1.display();
    balls2.display();
    balls3.display();
    balls4.display();
    balls5.display();
    balls6.display();
    balls7.display();
    balls8.display();
    balls9.display();
}