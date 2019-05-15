const style = document.documentElement.style;

var date = new Date();
var minute = date.getMinutes();
var hour = date.getHours();
if(hour > 12) {
    hour = hour - 12;
}
var seconds = date.getSeconds();
console.log(hour, minute, seconds);

function setTime() {
    let minuteInDegrees = minute * 6 - 90;
    let hourInDegrees = (hour * 30) + (minuteInDegrees / 12 ) - 90;
    let secondInDegrees = seconds * 6 - 90;
    console.log(hourInDegrees, minuteInDegrees, secondInDegrees)
    console.log(hourInDegrees + 360, minuteInDegrees + 360, secondInDegrees + 360)
    style.setProperty('--startTimeSecond',(secondInDegrees + 'deg'));
    style.setProperty('--endTimeSecond', (secondInDegrees + 360) + 'deg');
    style.setProperty('--startTimeMinute', (minuteInDegrees + 'deg'));
    style.setProperty('--endTimeMinute', (360 + minuteInDegrees) + 'deg');
    style.setProperty('--startTimeHour',  (hourInDegrees + 'deg'));
    style.setProperty('--endTimeHour', (360 + hourInDegrees) + 'deg');
}
 
setTime();