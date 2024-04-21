const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

function updateCountdowntime() {
  const currentTime = new Date();
  const difference = newYearTime - currentTime;

  const d = Math.floor(difference / 1000 / 60 / 60 / 24);
  const h = Math.floor(difference / 1000 / 60 / 60) % 24;
  const m = Math.floor(difference / 1000 / 60) % 60;
  const s = Math.floor(difference / 1000) % 60;

  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}
updateCountdowntime();
setInterval(updateCountdowntime, 1000);
