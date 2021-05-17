const startButton = document.getElementById('start');
const settingsButton = document.getElementById('settings-btn');
const settingsMenu = document.getElementById('settings-menu');

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

settingsButton.addEventListener('click', function() {
    this.classList.toggle('shift');
    settingsMenu.classList.toggle('menu-shift');
})