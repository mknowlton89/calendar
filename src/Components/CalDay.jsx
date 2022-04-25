import React, { useState } from 'react'
import './CalDay.css'

export const CalDay = ({ date, appointments }) => {
  let today = new Date()

  console.log(appointments);

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
        {/* { appointments && appointments.map((appointment) => {
          <span className='appointment-pill' onClick={(e) => handleAppointmentPillClick(e)}>{`${appointment.title}`}</span>
        })} */}
        {
          appointments && (
            appointments.map(appointment => (
              <span className='appointment-pill' key={appointment.id} onClick={(e) => handleAppointmentPillClick(e)}>{`${appointment.title}`}</span>
            ))
          )
        }
          {/* <span className='appointment-pill' onClick={(e) => handleAppointmentPillClick(e)}>10:00AM - 11:15AM</span> */}
        </div>
      </div>
    </div>
  )
}
