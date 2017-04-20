import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const Schedule = props => (
  <div>
    <BigCalendar
      events={events}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
);

export default Schedule;