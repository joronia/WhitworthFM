import React from 'react';

const ScheduleEvent = (props) => {
  return(
    <li>
      <img src='/src/img/album-error.png'/>
      <div className="flex flex-column flex-one space-between">
        <h4></h4>
        <h5 className="accent">3:00 - 4:00</h5>
        <h5>Some Hosts</h5>
       </div>
     </li>
  ); 
};

export default ScheduleEvent;