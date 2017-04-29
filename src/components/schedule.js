import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';


BigCalendar.momentLocalizer(moment);

let Schedule = React.createClass({
  render(){
    return (
      <BigCalendar
        {...this.props}
        events={events}
        defaultDate={new Date(2017, 0, 25)}
      />
    )
  }
})




// // Setup the localizer by providing the moment (or globalize) Object
// // to the correct localizer.
// BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

// const Schedule = props => (  
    // <BigCalendar      
      // events={events}
      // startAccessor='startDate'
      // endAccessor='endDate'
    // />  
// );

export default Schedule;