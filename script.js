let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;
let lapCount = 0;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapsList = document.getElementById("lapsList");

function updateDisplay() {
    let hrs = hours < 10 ? "0" + hours : hours;
    let mins = minutes < 10 ? "0" + minutes : minutes;
    let secs = seconds < 10 ? "0" + seconds : seconds;
    display.innerText = `${hrs}:${mins}:${secs}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    lapsList.innerHTML = "";
    lapCount = 0;
}

function recordLap() {
    if (running) {
        lapCount++;
        const li = document.createElement("li");
        li.textContent = `Lap ${lapCount}: ${display.innerText}`;
        lapsList.appendChild(li);
    }
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);
