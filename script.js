
const startingMinutes = 10;
let time = startingMinutes *60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown () {
const minutes = Math.floor(time / 60);
let seconds = time % 60;
console.log(`${minutes}: ${seconds}`)

countdownEl.innerHTML =`${minutes}: ${seconds}`;
time--;
}