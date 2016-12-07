function currentTimestamp() {
  //Set Timezone as Vancouver
  // convert to msec since Jan 1 1970
  var ld = new Date();
  var localTime = ld.getTime();
  // obtain local UTC offset and convert to msec
  var localOffset = ld.getTimezoneOffset() * 60000;
  // obtain UTC time in msec
  var utc = localTime + localOffset;

  var offset = -8.0;
  var Vancouver = utc + (3600000*offset);
  // convert msec value to date string
  var d = new Date(Vancouver);

  //calculate current datetime
	//var d = new Date();
	//var month = ((d.getMonth() + 1) < 10) ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
	var month = new Array();
	month[0] = "Jan";
	month[1] = "Feb";
	month[2] = "Mar";
	month[3] = "Apr";
	month[4] = "May";
	month[5] = "Jun";
	month[6] = "Jul";
	month[7] = "Aug";
	month[8] = "Sep";
	month[9] = "Oct";
	month[10] = "Nov";
	month[11] = "Dec";
  /*
  month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
  */
	var m = month[d.getMonth()];
	//var date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
  var date = d.getDate();
	var hour = (d.getHours() < 10) ? '0' + d.getHours() : d.getHours();
	var min = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes();
	//var sec = (d.getSeconds() < 10) ? '0' + d.getSeconds() : d.getSeconds();
	var ampm = 'am';

	if(hour == 12) {
		ampm = 'pm';
	} else if(hour > 12) {
		ampm = 'pm';
		hour = hour - 12;
	}

	var curDatetime = m + ' ' + date.toString() + ' at ' + hour + ':' + min + ampm ;

  return curDatetime;
}
