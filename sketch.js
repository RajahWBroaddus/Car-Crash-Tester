var car, wall;
var speed, weight;
var deformation;
var ready = 0;
var go = 1;
var gameState = ready;
frameRate = 60;

function setup() {
    createCanvas(1600, 400);

    speed = random(55, 90);
    weight = random(400, 1500);

    car = createSprite(50, 200, 50, 50);
    car.shapeColor = "blue";
    wall = createSprite(1500, 200, 60, height / 2);
    wall.shapeColor = (80, 80, 80);

    deformation = 0.5 * weight * speed * speed / 22500;

}

function draw() {
    background(0);

    if (gameState === ready) {
        textAlign(CENTER);
        textSize(45);
        fill("gold");
        stroke("aqua");
        text("Press \'Space\' to activate the car", 800, 200);
        if (keyDown("space")) {
            car.velocityX = speed;
            gameState = go;
        }

    }

    if (car.isTouching(wall)) {
        car.velocityX = 0;
        if (deformation < 100) {
            car.shapeColor = "green";
        }
        if (deformation >= 100 & deformation <= 180) {
            car.shapeColor = "green";
        }
        if (deformation > 180) {
            car.shapeColor = "red";
        }
    }
    if (car.x > 1460) {
        car.x = 1460;
    }
    drawSprites();
}