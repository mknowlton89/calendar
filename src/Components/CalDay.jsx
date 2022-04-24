import React from 'react'
import './CalDay.css'

// type Props = {
//   dayNum: String,
// }

export const CalDay = ({ index, dayNum }) => {

  function handleDayBoxClick() {
    alert('Day Box clicked')
  }

  function handleAppointmentPillClick (e) {
    alert('Appointment Pill was clicked')
    e.stopPropagation();
  }

  return (
    <div className={`grid-item grid-item-${index}`} onClick={() => handleDayBoxClick()}>
      <div className='day-content-wrapper'>
        <div className='day-num'>
          <p>{dayNum}</p>
        </div>
        <div className='appointments-wrapper'>
          <span className='appointment-pill' onClick={(e) => handleAppointmentPillClick(e)}>10:00AM - 11:15AM</span>
          <span className='appointment-pill' onClick={(e) => handleAppointmentPillClick(e)}>12:00PM - 1:15PM</span>
        </div>
      </div>
    </div>
  )
}
