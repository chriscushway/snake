class Grid{
    constructor(canvas, ctx, gridWidth, gridHeight, cellAmt) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.ctx.canvas.width = gridWidth;
        this.ctx.canvas.height = gridHeight;
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.cellAmt = cellAmt;
        this.cellSize = gridWidth / cellAmt;
        this.foodX = null;
        this.foodY = null;
    }

    setGridHeight(gridHeight) {
        this.ctx.canvas.height = gridHeight;
    }

    setGridWidth(gridWidth) {
        this.ctx.canvas.width = gridWidth;
    }

    setCellAmount(cellAmt) {
        this.cellAmt = cellAmt;
    }

    setCellSize(cellSize) {
        this.cellSize = cellSize;
    }

    paintSnake(snake, colour = "#FF0000") {
        this.ctx.fillStyle = colour;
        this.paintBlock(snake.head.x, snake.head.y);
        for(let i = 0; i < snake.body.length; i++) {
            this.ctx.fillRect(snake.body[i].x, snake.body[i].y, this.cellSize, this.cellSize);
        }
    }

    clearGrid() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    paintBlock(x, y, colour = "#FF0000") {
        console.log(`painting food at ${x}, ${y}`);
        this.ctx.fillStyle = colour;
        this.ctx.fillRect(x, y, this.cellSize, this.cellSize);
    }

    generateFoodPos(snake) {
        let generated = false;
        let x = 0;
        let y = 0;
        console.log('about to loop');
        while(!generated) {
            console.log('looping');
            x = this.generateFoodX();
            y = this.generateFoodY();
            console.log(`(${x}, ${y})`);
            generated = !this.isPartOfSnake(snake, x, y);
           
        }
        console.log('exiting loop');
        this.foodX = x;
        this.foodY = y;
    }

    isPartOfSnake(snake, x, y) {
        for(let i = 0; i < snake.length; i++) {
            if (snake[i].x === x && snake[i].y === y) {
                return true;
            }
        }
        return false;
    }

    generateFoodX() {
        console.log(`cellAmt: ${this.cellAmt}, cellSize: ${this.cellSize} gridwidth ${this.gridWidth}`);
        console.log(Math.floor(Math.random() * this.gridWidth));
        return Math.floor(Math.random() * this.cellAmt) * this.cellSize;
    }

    generateFoodY() {
        return Math.floor(Math.random() * this.cellAmt) * this.cellSize;
    }

}