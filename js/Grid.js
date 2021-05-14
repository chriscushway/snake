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
        this.grid = this.createGrid();
        console.log(this.grid);
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
        for(let i = 0; i < snake.body.length; i++) {
            this.ctx.fillRect(snake.body[i].x, snake.body[i].y, this.cellSize, this.cellSize);
        }
    }

    createGrid() {
        let grid = [];
        for(let i = 0; i < this.cellAmt; i++) {
            grid[i] = [];
            for(let j = 0; j < this.cellAmt; j++) {
                grid[i][j] = [i*this.cellSize, j*this.cellSize];
            }
        }
        return grid;
    }

    clearGrid() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    paintBlock(x, y, colour = "#FF0000") {
        console.log(`painting food at ${x}, ${y}`);
        this.ctx.fillStyle = colour;
        this.ctx.fillRect(x, y, this.cellSize, this.cellSize);
    }

    generateFoodPos() {
        this.foodX = this.grid[this.generateFoodX()][this.generateFoodY()][0];
        this.foodY = this.grid[this.generateFoodX()][this.generateFoodY()][1];
    }

    subtractSnakeFromGrid(snake) {
        for(let i = 0; i < snake.length; i++) {

        }
    }

    generateFoodX() {
        return Math.floor(Math.random() * this.cellAmt);
    }

    generateFoodY() {
        return Math.floor(Math.random() * this.cellAmt);
    }

}