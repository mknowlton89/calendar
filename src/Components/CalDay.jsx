import React from 'react'
import './CalDay.css'

// type Props = {
//   dayNum: String,
// }

export const CalDay = ({ date, index }) => {
  let today = new Date()
  let currentDay = false;
  if (today.toDateString() === date.toDateString()) {
    currentDay = true;
  }

  function handleDayBoxClick() {
    alert('Day Box clicked')
    console.log(date)
  }

  function handleAppointmentPillClick (e) {
    alert('Appointment Pill was clicked')
    e.stopPropagation();
  }

  return (
    <div className={`grid-item grid-item`} onClick={() => handleDayBoxClick()}>
      <div className='day-content-wrapper'>
        <div className={`day-num ${currentDay ? "currentDay" : ""}`}>
          <p>{date.getDate()}</p>
        </div>
        <div className='appointments-wrapper'>
          {/* <span className='appointment-pill' onClick={(e) => handleAppointmentPillClick(e)}>10:00AM - 11:15AM</span>
          <span className='appointment-pill' onClick={(e) => handleAppointmentPillClick(e)}>12:00PM - 1:15PM</span> */}
        </div>
      </div>
    </div>
  )
}
