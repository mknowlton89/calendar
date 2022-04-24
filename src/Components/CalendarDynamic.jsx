import React, { useState } from 'react';
import './Calendar.css';
import { CalDay } from './CalDay';

const Calendar = () => {
  let [ currentDate, setCurrentDate ] = useState(new Date());
  const monthOptions = { month: 'long'};
  let daysInPreviousMonth;
  let previousMonth;
  let daysArray = [];

  // let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  let monthToDisplay = new Intl.DateTimeFormat('en-US', monthOptions).format(currentDate);

  if (currentMonth === 0) {
    previousMonth = 11;
  } else {
    previousMonth = currentMonth - 1;
  }

  if (currentDate === 0) { // If we're in January, the previous month is Dec of currentYear - 1.
    daysInPreviousMonth = new Date((currentYear - 1), previousMonth + 1, 0).getDate();
  } else {
    daysInPreviousMonth = new Date(currentYear, previousMonth + 1, 0).getDate();
  }

  const firstDayOfCurrentMonth = new Date(`${monthToDisplay} 1, ${currentYear} 00:00:00`);
  const dayOfFirstDayOfMonth = firstDayOfCurrentMonth.getDay() - 1;

  // Create the daysArray
    for (let i = (-1 * dayOfFirstDayOfMonth); i < (35 - dayOfFirstDayOfMonth); i++) {
      if (i < 0) {
        let prevMonthDayNum = daysInPreviousMonth + i;
        let date = new Date(currentYear, previousMonth, prevMonthDayNum);
        daysArray.push(
          {
            date: date,
          })
      } else {
        let date = new Date(currentYear, currentMonth, i);
        daysArray.push(
          {
            date: date,
          })
      }
    }

  function goToPrevMonth() {
    if (currentMonth === 0) {
      let previousYear = currentYear - 1;
      setCurrentDate(new Date(previousYear, 12, 0));
    } else {
      setCurrentDate(new Date(currentYear, previousMonth, 1));
    }
  }

  function goToNextMonth() {
    let nextMonth = currentMonth + 1
    setCurrentDate(new Date(currentYear, nextMonth, 1));
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
      {daysArray.map(({date}) => (
        <CalDay key={date} date={date}/>
    ))}
      </div>
    </div>
  )
}

export default Calendar