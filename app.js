//set variables
dateDisplay = document.getElementById('current-date');
timeDisplay = document.getElementById('current-time');


function currentDate() {
  let now = new Date();
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  time = `${now.getHours()}:${now.getMinutes()}`,
  date = [now.getDate(),
          months[now.getMonth()],
          now.getFullYear()].join(' ');
  dateDisplay.textContent = `Today is: ${date}`;
  timeDisplay.textContent = `It is: ${time}`;

  if (now.getHours() >= 21) {
    document.getElementById('nine-hour').style.backgroundColor = "red";
}

}
//events
setInterval(currentDate, 1000);
currentDate();
//inits: 
//check local storage object for matching id
//grab current date and put on html
//color code past/present and future