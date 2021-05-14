const startButton = document.getElementById('start');
let toggle = true;
startButton.addEventListener('click', function() {
    toggle ? start() : stop();
    toggle = !toggle;
});