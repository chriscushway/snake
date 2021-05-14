let gridWidth = 400;
let gridHeight = 400;
var game;

const canvas = document.getElementById('gameContainer');
const ctx = canvas.getContext('2d');
const foodColour = '#10e709';
const grid = new Grid(canvas, ctx, gridWidth, gridHeight, 40);
const head = new Head(200, 200);
const bodyParts = [new BodyPart(200,210), new BodyPart(200,220)];
const snake = new Snake(head, grid, bodyParts);
let noFood = true;

function init() {
    grid.paintSnake(snake);
}

function moveUp() {
    snake.moveSnakeUp();
}

function moveDown() {
    snake.moveSnakeDown();
}

function moveLeft() {
    snake.moveSnakeLeft();
}

function moveRight() {
    snake.moveSnakeRight();
}

let func = moveUp;


document.onkeydown = handleKeyPress;

function handleKeyPress(e) {
    switch (e.keyCode) {
        case 37:
            console.log('down');
            func = moveLeft;
            break;
        case 38:
            console.log('up');
            func = moveUp;
            break;
        case 39:
            console.log('right');
            func = moveRight;
            break;
        case 40:
            console.log('down');
            func = moveDown;
            break;
    }
}

function logicLoop(func) {
    func();
    if(noFood) {
        makeFood();
    }
    if (snake.hasCrashed()) {
        stop();
    }

    if(snake.hasEatenFood(grid.foodX, grid.foodY)) {
        noFood = true;
        snake.addBodyPart();
    }
}

function renderLoop() {
    grid.clearGrid();
    grid.paintSnake(snake);
    grid.paintBlock(grid.foodX, grid.foodY, foodColour);
}

function loop() {
    logicLoop(func);
    renderLoop();
}

function makeFood() {
    grid.generateFoodPos();
    noFood = false;
}

init();

function start() {
    game = setInterval(function(){loop()}, 100);
}

function stop() {
    clearInterval(game);
}

