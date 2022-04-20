import React from 'react';
import './Calendar.css';
import { CalDay } from './CalDay';

const Calendar = () => {
  return (
    <div className='calendar-wrapper'>
      <div className='month-block'>January</div>
      <div className='day-wrapper'>
        <div className='row'>
          <CalDay dayNum={'1'}/>
          <CalDay dayNum={'2'}/>
          <CalDay dayNum={'3'}/>
          <CalDay dayNum={'4'}/>
          <CalDay dayNum={'5'}/>
          <CalDay dayNum={'6'}/>
          <CalDay dayNum={'7'}/>
        </div>
        <div className='row'>
          <CalDay dayNum={'8'}/>
          <CalDay dayNum={'9'}/>
          <CalDay dayNum={'10'}/>
          <CalDay dayNum={'11'}/>
          <CalDay dayNum={'12'}/>
          <CalDay dayNum={'13'}/>
          <CalDay dayNum={'14'}/>
        </div>
        <div className='row'>
          <CalDay dayNum={'15'}/>
          <CalDay dayNum={'16'}/>
          <CalDay dayNum={'17'}/>
          <CalDay dayNum={'18'}/>
          <CalDay dayNum={'19'}/>
          <CalDay dayNum={'20'}/>
          <CalDay dayNum={'21'}/>
        </div>
        <div className='row'>
          <CalDay dayNum={'22'}/>
          <CalDay dayNum={'23'}/>
          <CalDay dayNum={'24'}/>
          <CalDay dayNum={'25'}/>
          <CalDay dayNum={'26'}/>
          <CalDay dayNum={'27'}/>
          <CalDay dayNum={'28'}/>
        </div>
        <div className='row'>
          <CalDay dayNum={'29'}/>
          <CalDay dayNum={'30'}/>
          <CalDay dayNum={'31'}/>
          <CalDay dayNum={'1'}/>
          <CalDay dayNum={'2'}/>
          <CalDay dayNum={'3'}/>
          <CalDay dayNum={'4'}/>
        </div>
      </div>

    </div>
  )
}

export default Calendar