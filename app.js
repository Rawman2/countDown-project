const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const timeLists = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline");
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 1, 30, 0);
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
let minutes = futureDate.getMinutes();
const date = futureDate.getDate();
let month = futureDate.getMonth();
month = months[month];
let day = futureDate.getDay();
day = weekdays[day];
if (minutes.toString().length < 2) {
  minutes = "0" + minutes;
}
giveaway.innerHTML = `Giveaway Ends On ${day}, ${date} ${month} ${year}, ${hour}:${minutes}am`;
function getRemainingTime() {
  const futureTime = futureDate.getTime();
  const currentTime = new Date().getTime();
  const t = futureDate - currentTime;
  // conversion to ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  // get days hours minnutes and seconds
  let daysD = Math.floor(t / oneDay);
  let hoursD = Math.floor((t % oneDay) / oneHour);
  let minutesD = Math.floor((t % oneHour) / oneMin);
  let secsD = Math.floor((t % oneMin) / 1000);

  const value = [daysD, hoursD, minutesD, secsD];
  function format(v) {
    if (v < 10) {
      return `0${v}`;
    } else {
      return `${v}`;
    }
  }
  timeLists.forEach(function (list, index) {
    list.innerHTML = format(value[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `You don late`;
  }
}
const countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
