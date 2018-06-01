let width = 500,
    height = 500,
    tickRate = 200; //TODO: Minske når man får flere poeng

let snake = new Snake(4, 25);

function setup() {
    createCanvas(width, height);
    frameRate(60);
    setInterval(tick, tickRate);
}

function draw() {
    background(0);

    snake.draw();
}

function tick() {
    snake.update();
}
