function formatTime(unixTimestamp){
  var dt = new Date(unixTimestamp * 1000);
  var currentDate = new Date();
  var currentDate = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

  var hours = dt.getHours();
  var minutes = dt.getMinutes();
  var seconds = dt.getSeconds();

  if (hours < 10)
   hours = '0' + hours;

  if (minutes < 10)
   minutes = '0' + minutes;

  if (seconds < 10)
   seconds = '0' + seconds;

  var formatedDate = hours + ":" + minutes + ":" + seconds;
  var diff = ( new Date("1970-1-1 " + currentDate) - new Date("1970-1-1 " + formatedDate) ) / 1000 / 60 / 60;
  diff = ''+diff+'';
  var difference = parseFloat(diff);
  difference = difference * 60 * 60;
  var minutesDiff = Math.floor((difference / 60));
  difference = difference - (minutesDiff * 60);
  var secondsDiff = Math.round(difference);

  if (minutesDiff < 10)
   minutesDiff = '0' + minutesDiff;

  if (secondsDiff < 10)
   secondsDiff = '0' + secondsDiff;
  if (minutesDiff != 0) {
  return minutesDiff + ":" + secondsDiff + " minutos";
  }else {
    return "0:" + secondsDiff + " segundos";
  }
}