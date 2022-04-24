import React, { useEffect } from 'react';
import './Calendar.css';
import { CalDay } from './CalDay';

const Calendar = () => {
  // Get the current Date
  let currentDate = new Date();

  // Get the current month for the calendar title
  const monthOptions = { month: 'long'};
  let monthToDisplay = new Intl.DateTimeFormat('en-US', monthOptions).format(currentDate);

  // Get the current month - in order to get the number of days in this month
  let currentMonth = currentDate.getMonth();
  console.log(currentMonth);
  let currentYear = currentDate.getFullYear();
  let daysInCurrentMonth = new Date(currentYear, (currentMonth + 1), 0).getDate(); // TODO: This is currently showing 31 for April 2022, when it should be 30.
  console.log(daysInCurrentMonth);

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

  console.log(daysInPreviousMonth);

  // Get the day of the week of the first day of currentMonth
  const firstDayOfCurrentMonth = new Date(`${monthToDisplay} 1, ${currentYear} 00:00:00`);
  const day1 = firstDayOfCurrentMonth.getDay();
  // Sunday - Saturday : 0 - 6


  let days = [];

    for (let i = (-1 * day1); i < (35 - day1); i++) {
      if (i < 0) {
        // Get the prev month
        let prevMonthDayNum = daysInPreviousMonth + i;
        let prevMonthDate = currentDate - i;
        let prevMonthDateString = new Date(prevMonthDate);
        console.log(prevMonthDateString);
        days.push(prevMonthDayNum)
      } else {
        days.push(i)
      }
    }

  console.log(days);

  function goToPrevMonth() {
    alert('Not hooked up yet');
  }

  function goToNextMonth() {
    alert('Not hooked up yet');
  }


  return (
    <div className='calendar-wrapper'>
      <div className='month-name'>
        <button className='month-nav-btn' onClick={goToPrevMonth}>Prev</button>
        <h2>{`${monthToDisplay} ${currentYear}`}</h2>
        <button className='month-nav-btn' onClick={goToNextMonth}>Next</button>
      </div>
      <div className='legend'>
        <p>Sunday</p>
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
      </div>
      <div className='grid-container'>
      {days.map((i, index) => (
        <CalDay index={i} dayNum={i + 1} key={index}/>
    ))}
      </div>
    </div>
  )
}

export default Calendar