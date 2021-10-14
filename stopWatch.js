
let millS = 0;
let seconds = 0;
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let updateMillS = document.getElementById('mS');
let updateSeconds = document.getElementById('seconds');

let interval;

const addTime = () => {
    millS ++;

    if (millS <= 9) {
        updateMillS.innerHTML = "0" + millS;
    }
    if (millS > 9) {
        updateMillS.innerHTML = millS;
    }
    if (millS > 99) {
        seconds++;
        updateSeconds.innerHTML = "0" + seconds;
        millS = 0;
        updateMillS.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        updateSeconds.innerHTML = seconds;
    }

    timer();
}

const timer = () => {
    interval = setTimeout(addTime, 10);
}



start.onclick = timer;

stop.onclick = function() {
    clearTimeout(interval);
}

reset.onclick = function() {
    updateMillS.innerHTML = "00";
    updateSeconds.innerHTML = "00";

}
