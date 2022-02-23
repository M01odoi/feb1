const convertSecToDateTime = (unix_timestamp) => {
  var a = new Date(unix_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateTime = {};
  dateTime.year = a.getFullYear();
  dateTime.month = months[a.getMonth()];
  dateTime.date = a.getDate();
  dateTime.hour = a.getHours();
  dateTime.min = a.getMinutes() > 9 ? a.getMinutes() : `0${a.getMinutes()}`;
  dateTime.dateTime = dateTime.date + ' ' + dateTime.month + ' ' + dateTime.year + ' ' ;
  dateTime.time = dateTime.hour + ':' + dateTime.min;
  return dateTime;
}
export default convertSecToDateTime;