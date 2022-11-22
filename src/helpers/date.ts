
export const convertToTimestamp = (before:string, after:string) => {
  let since = new Date(before);
  let until = new Date(after);
  let result = duration(since, until)
  return result
}

const duration = (since:Date, until:any) => {

  if (since > until) {
    let temp = since
    since = until
    until = temp
  }

  let years, months, days;

// years
  years = until.getFullYear() - since.getFullYear();
  if (until.getMonth() == since.getMonth()) {
    if (since.getDate() < until.getDate() - 1) {
      years += 1;
    }
    if (since.getDate() == until.getDate()) {
      years += 1;
    }
  }
  if (since.getMonth() > until.getMonth()) {
    years = years - 1;
  }
// months
	if (since.getDate() > until.getDate()) {
    if (since.getMonth() > until.getMonth() - 1) {
      months = 11 - (since.getMonth() - until.getMonth());
      if (since.getMonth() == until.getMonth()) {
        months = 11;
      }
    } else {
      months = until.getMonth() - since.getMonth() - 1;
    }
  } else {
    if (since.getMonth() > until.getMonth()) {
      months = 12 - (until.getMonth() - since.getMonth());
    } else {
      months = until.getMonth() - since.getMonth();
    }
  }
// Days

if (since.getDate() > until.getDate() - 1) {
  var days_pm = daysInMonths(until.getMonth(until.getMonth() - 1));
  days = days_pm - since.getDate() + until.getDate();
  if (
    (since.getMonth() == until.getMonth()) &&
    (since.getDate() == until.getDate())
  ) {
    days = 0;
  }
} else {
  days = until.getDate() - since.getDate();
}

return years;

}


const daysInMonths = (date: any) => {
  date = new Date(date);
  return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
}


export const getTodayDate = () => {
  // Date object
  let today = new Date();
  
  // Current Date
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+' '+today.getDate();
  
  
  // Current Time
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  
  // Current Date and Time
  let dateTime = date+' '+time;
  
  return dateTime
}