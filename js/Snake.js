class Snake {
    constructor(head, grid, body = []) {
        this.head = head;
        this.grid = grid;
        this.body = body;
    }

    moveDown() {
        console.log(this.head.x, this.head.y);
        this.head.y = this.head.y + this.grid.cellSize > this.grid.gridHeight ? 0 : this.head.y + this.grid.cellSize;
        console.log(this.head.x, this.head.y);
     }

     moveUp() {
        console.log(this.head.x, this.head.y);
        this.head.y = this.head.y - this.grid.cellSize < 0 ? this.grid.gridHeight : this.head.y - this.grid.cellSize;
        console.log(this.head.x, this.head.y);
     }

     moveLeft() {
        console.log(this.head.x, this.head.y);
        this.head.x = this.head.x - this.grid.cellSize < 0 ? this.grid.gridWidth : this.head.x - this.grid.cellSize;
        console.log(this.head.x, this.head.y);
     }

     moveRight() {
        console.log(this.head.x, this.head.y);
        this.head.x = this.head.x + this.grid.cellSize > this.grid.gridWidth ? 0 : this.head.x + this.grid.cellSize;
        console.log(this.head.x, this.head.y);
     }
}