let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function timerDate() {
  let currrentDate = new Date();
  let newYEAR = new Date("January 1, 2023");
  let milliSecond = newYEAR - currrentDate;
  let second = milliSecond / 1000;
  let day = Math.floor(second / 3600 / 24);
  let hour = Math.floor((second - day * 3600 * 24) / 3600);
  let minute = Math.floor((second - day * 3600 * 24 - hour * 3600) / 60);
  second = Math.floor(second - day * 3600 * 24 - hour * 3600 - minute * 60);
  days.textContent = addZero(day);
  hours.textContent = addZero(hour);
  minutes.textContent = addZero(minute);
  seconds.textContent = addZero(second);
}

function addZero(time) {
  if (time < 10) return `0${time}`;
  else return time;
}

setInterval(timerDate, 1000);
