import React, { useState } from 'react'
import Modal from 'react-modal/lib/components/Modal'
import './CalDay.css'

Modal.setAppElement('#root');

export const CalDay = ({ date, appointments }) => {
  const [newApptModalIsOpen, setNewApptModalIsOpen] = useState(false);
  const [apptModalIsOpen, setApptModalIsOpen] = useState(false);

  function openNewApptModal() {
    setNewApptModalIsOpen(true);
  }

  function closeNewApptModal(e) {
    e.stopPropagation();
    setNewApptModalIsOpen(false);
  }

  function openExistingApptModal() {
    setApptModalIsOpen(true);
  }

  function closeExistingApptModal(e) {
    e.stopPropagation();
    setApptModalIsOpen(false);
  }

  let today = new Date()

  let currentDay = false;
  if (today.toDateString() === date.toDateString()) {
    currentDay = true;
  }

  function handleAppointmentPillClick (e) {
    e.stopPropagation();
    setApptModalIsOpen(true);
  }

  return (
    <div className={`grid-item`} onClick={() => openNewApptModal()}>
      <div className='day-content-wrapper'>
        <div className={`day-num ${currentDay ? "currentDay" : ""}`}>
          <p>{date.getDate()}</p>
        </div>
        <div className='appointments-wrapper'>
        {
          appointments && (
            appointments.map(appointment => (
              <p className='appointment-pill' key={appointment.id} onClick={(e) => handleAppointmentPillClick(e)}>{`${appointment.title} - ${appointment.lastName}`}</p>
            ))
          )
        }
        </div>
      </div>
      <Modal
        isOpen={newApptModalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <div>I am a modal</div>
        {/* <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
        <button onClick={(e) => closeNewApptModal(e)}>close</button>
      </Modal>
      <Modal
        isOpen={apptModalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <div>I am an existing appt modal</div>
        {/* <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
        <button onClick={(e) => closeExistingApptModal(e)}>close</button>
      </Modal>
    </div>
  )
}
