let day = document.getElementById("day");
let time = document.getElementById("time");
let date = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
day.innerText = weekday[date.getDay()];
time.innerText = date.getUTCMilliseconds();
