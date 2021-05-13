class BodyPart {
     constructor(x, y, grid) {
        this.x = x;
        this.y = y;
        this.grid = grid;
     }

     moveDown() {
        console.log(this.x, this.y);
        this.y = this.y + this.grid.cellSize > this.grid.ctx.canvas.height ? 0 : this.y + this.grid.cellSize;
        console.log(this.x, this.y);
     }

     moveUp() {
        console.log(this.x, this.y);
        this.y = this.y - this.grid.cellSize < 0 ? this.grid.ctx.canvas.height : this.y - this.grid.cellSize;
        console.log(this.x, this.y);
     }

     moveLeft() {
        console.log(this.x, this.y);
        this.x = this.x - this.grid.cellSize < 0 ? this.grid.ctx.canvas.width : this.x - this.grid.cellSize;
        console.log(this.x, this.y);
     }

     moveRight() {
        console.log(this.x, this.y);
        this.x = this.x + this.grid.cellSize > this.grid.ctx.canvas.width ? 0 : this.x + this.grid.cellSize;
        console.log(this.x, this.y);
     }
}