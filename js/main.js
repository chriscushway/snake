let gridWidth = 400;
let gridHeight = 400;

const canvas = document.getElementById('gameContainer');
const ctx = canvas.getContext('2d');

const grid = new Grid(canvas, ctx, gridWidth, gridHeight);

function init() {

}


document.onkeydown = handleKeyPress;

function handleKeyPress(e) {
    switch (e.keyCode) {
        case 37:
            console.log('left');
            break;
        case 38:
           console.log('up');
            break;
        case 39:
            console.log('right');
            break;
        case 40:
            console.log('down');
            break;
    }
}