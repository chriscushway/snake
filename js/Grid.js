class Grid{
    constructor(canvas, ctx, gridWidth, gridHeight, cellAmt) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.ctx.canvas.width = gridWidth;
        this.ctx.canvas.height = gridHeight;
        this.cellAmt = cellAmt;
        this.cellSize = gridWidth / cellAmt;
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

    paintSnake(bodyParts, colour = "#FF0000") {
        this.ctx.fillStyle = colour;
        for(let i = 0; i < bodyParts.length; i++) {
            ctx.fillRect(bodyParts[i].x, bodyParts[i].y, this.cellSize, this.cellSize);
        }
    }

    clearGrid() {
        ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    paintBlock(x, y, colour = "#FFFFFF") {
        this.ctx.fillStyle = colour;
        this.ctx.fillRect(x, y, this.cellSize, this.cellSize);
    }

}