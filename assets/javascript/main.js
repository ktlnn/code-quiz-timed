var minutes = 2;
var seconds = minutes * 60;
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startTimer)
setInterval(startTimer, 1000);
function startTimer(){
    var mins = Math.floor(seconds / 60);
    var secs = seconds % 60;
    timer.innerHTML = `${mins}: ${secs}`;
    seconds--;
}

