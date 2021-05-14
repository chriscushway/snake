const startButton = document.getElementById('start');
let toggle = true;
startButton.addEventListener('click', function() {
    if (toggle) {
        startButton.innerHTML = 'pause';
        start();
    } else {
        startButton.innerHTML = 'play';
        stop();
    }
    toggle = !toggle;
});