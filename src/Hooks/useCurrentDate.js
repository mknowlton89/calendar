import React from 'react'

export const useCurrentDate = () => {
  let currentDate = new Date();

  // console.log(currentDate);

  // Get the current month for the calendar title
  const monthOptions = { month: 'long'};
  let monthToDisplay = new Intl.DateTimeFormat('en-US', monthOptions).format(currentDate);

  // Get the current month - in order to get the number of days in this month
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  let previousMonth;

  if (currentMonth === 0) {
    previousMonth = 11;
  } else {
    previousMonth = currentMonth - 1;
  }

  let daysInPreviousMonth;

  if (currentDate === 0) { // If we're in January, the previous month is Dec of currentYear - 1.
    daysInPreviousMonth = new Date((currentYear - 1), previousMonth + 1, 0).getDate();
  } else {
    daysInPreviousMonth = new Date(currentYear, previousMonth + 1, 0).getDate();
  }

  // Get the day of the week of the first day of currentMonth
  const firstDayOfCurrentMonth = new Date(`${monthToDisplay} 1, ${currentYear} 00:00:00`);
  const day1 = firstDayOfCurrentMonth.getDay() - 1;


  let days = [];

    for (let i = (-1 * day1); i < (35 - day1); i++) {
      if (i < 0) {
        let prevMonthDayNum = daysInPreviousMonth + i;
        let date = new Date(currentYear, previousMonth, prevMonthDayNum);
        days.push(
          {
            i: prevMonthDayNum,
            date: date,
          })
      } else {
        let date = new Date(currentYear, currentMonth, i);
        days.push(
          {
            i: i,
            date: date,
          })
      }
    }

  return {days, monthToDisplay, currentYear};
}
