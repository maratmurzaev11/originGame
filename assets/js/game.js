document.getElementById("hudTime").innerHTML = "00:00"
let time = 0;
function startTime() {
    setTimeout(function () {
        time++;
        let sec = Math.floor(time % 60);
        let min = Math.floor(time / 60);
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min < 10) {
            min = "0" + min;
        }
        document.getElementById("hudTime").innerHTML = min + ":" + sec;
        startTime();
    }, 1000);
}
startTime();