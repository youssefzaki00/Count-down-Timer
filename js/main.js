let time = new Date(`March 22 , 2023 10:00:00`).getTime();
let min = 1000 * 60;
let hou = 1000 * 60 * 60;
let day = 1000 * 60 * 60 * 24;
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  trueDate = time - dateNow;
  let days = Math.floor(trueDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor(trueDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(trueDate % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(trueDate % (1000 * 60) / (1000));
  document.querySelector('.days .num').innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector('.hours .num').innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector('.mins .num').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector('.secs .num').innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  if (trueDate < 0) {
    clearInterval(counter);

  }

}, 1000);

let minute = setInterval(() => {
  let minuteFirst = document.querySelector('.mins .first');
  minuteFirst.classList.add('minutes');
  setTimeout(() => {
    if (minuteFirst.classList.contains('minutes')) {
      minuteFirst.classList.remove('minutes');
    }
  }, 1100)
}, min);

let hour = setInterval(() => {
  let hoursFirst = document.querySelector('.hours .first');
  hoursFirst.classList.add('houres');
  setTimeout(() => {
    if (hoursFirst.classList.contains('houres')) {
      hoursFirst.classList.remove('houres');
    }
  }, 1000)
}, hou);

let dayes = setInterval(() => {
  let dayFirst = document.querySelector('.days .first');
  dayFirst.classList.add('day');
  setTimeout(() => {
    if (dayFirst.classList.contains('day')) {
      dayFirst.classList.remove('day');
    }
  }, 1000)
}, day);
