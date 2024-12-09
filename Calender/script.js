const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"]
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "Octorber", "November", "December"]

date.innerHTML = (today.getDate()<10 ? "0":"") + today.getDate() ;
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();