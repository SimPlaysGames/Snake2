let width = 500,
    height = 500,
    tickRate = 200; //TODO: Minske når man får flere poeng

let snake = new Snake(4, 25);
let apple = {
    x: Math.floor(Math.random() * (width / 25)),
    y: Math.floor(Math.random() * (height / 25))
};

function setup() {
    createCanvas(width, height);
    frameRate(60);
    setInterval(tick, tickRate);
}

function draw() {
    background(0);

    if(!snake.dead) {
        fill(255, 0, 0);
        ellipseMode(CORNER);
        ellipse(apple.x * 25, apple.y * 25, 25, 25);

        snake.draw();
    }
}

function tick() {
    snake.update();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        snake.direction = 'W';
    } else if (keyCode === RIGHT_ARROW) {
        snake.direction = 'E';
    }  else if (keyCode === UP_ARROW) {
        snake.direction = 'N';
    } else if (keyCode === DOWN_ARROW) {
        snake.direction = 'S';
    } else if (keyCode === 82) {
        snake.clear();
    }
}
