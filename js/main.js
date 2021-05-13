let gridWidth = 400;
let gridHeight = 400;

const canvas = document.getElementById('gameContainer');
const ctx = canvas.getContext('2d');

const grid = new Grid(canvas, ctx, gridWidth, gridHeight, 10);
const head = new Head(200, 200, grid);
const snake = [head];

function init() {
    grid.paintSnake(snake);
}

function moveUp() {
    for(let i = 0; i < snake.length; i++) {
        snake[i].moveUp();
    }
}

function moveDown() {
    for(let i = 0; i < snake.length; i++) {
        snake[i].moveDown();
    }
}

function moveLeft() {
    for(let i = 0; i < snake.length; i++) {
        snake[i].moveLeft();
    }
}

function moveRight() {
    for(let i = 0; i < snake.length; i++) {
        snake[i].moveRight();
    }
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
}

function renderLoop() {
    grid.clearGrid();
    grid.paintSnake(snake);
}

function loop() {
    logicLoop(func);
    renderLoop();
}

init();
setInterval(function(){loop()}, 100);

