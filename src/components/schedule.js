import React, { Component } from 'react';
import ScheduleEvent from './schedule_event';


class Schedule extends Component {
  
  constructor(props) {
    super(props);    
    console.log(this.props.items)
    if(this.props.items) {
      eventItems = this.props.items.map((event) => {
        return <ScheduleEvent event={event} />
      }); 
    }
  }

  render() {
    return(      
      <div className="container flex flex-column">
        <div className="col-md-12">
          <h1 className="title">Schedule</h1>
        </div>
        <div className="flex-one schedule-container">
          <div className="col-md-6 col-sm-6 col-xs-6 next">
            <div className="head">
              <h4>Up Next</h4>
            </div>
            <img src='/src/img/album-error.png'/>
            <h2>Test title</h2>
            <h4 className="accent">3:00 - 4:00</h4>
            <h4>Some Hosts</h4>
            <p>A Radio Show</p>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6 sched">
            <div className="flex space-between head">
              <img ng-click="subDay()" alt="Left Arrow"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIEZpcmV3b3JrcyAxMCwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyBpZD0iVW50aXRsZWQtUGFnZSUyMDEiIHZpZXdCb3g9IjAgMCAxOCAyNyIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjAwIiB2ZXJzaW9uPSIxLjEiDQoJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSINCgl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE4cHgiIGhlaWdodD0iMjdweCINCj4NCgk8ZyBpZD0iTGF5ZXIlMjAxIj4NCgkJPHBhdGggZD0iTSAxNi41IDEuOTIwOSBMIDEgMTMuOTA2IEwgMTYuNSAyNS44NzU1IEwgMTYuNjU2MyAyNiAiIHN0cm9rZT0iIzliOWI5YiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+DQoJPC9nPg0KPC9zdmc+" />
              <div className="days flex space-between">
                <h4 ng-click="selectDay(1)" ng-className="{'selected': dayIndex == 1 }">Mon</h4>
                <h4 ng-click="selectDay(2)" ng-className="{'selected': dayIndex == 2 }">Tue</h4>
                <h4 ng-click="selectDay(3)" ng-className="{'selected': dayIndex == 3 }">Wed</h4>
                <h4 ng-click="selectDay(4)" ng-className="{'selected': dayIndex == 4 }">Thu</h4>
                <h4 ng-click="selectDay(5)" ng-className="{'selected': dayIndex == 5 }">Fri</h4>
                <h4 ng-click="selectDay(6)" ng-className="{'selected': dayIndex == 6 }">Sat</h4>
                <h4 ng-click="selectDay(7)" ng-className="{'selected': dayIndex == 7 }">Sun</h4>
              </div>
              <img ng-click="addDay()"  alt="Right Arrow"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIEZpcmV3b3JrcyAxMCwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyBpZD0iVW50aXRsZWQtUGFnZSUyMDEiIHZpZXdCb3g9IjAgMCAxOCAyNyIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjAwIiB2ZXJzaW9uPSIxLjEiDQoJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSINCgl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE4cHgiIGhlaWdodD0iMjdweCINCj4NCgk8ZyBpZD0iTGF5ZXIlMjAxIj4NCgkJPHBhdGggZD0iTSAxLjUgMjUuMDc5MSBMIDE3IDEzLjA5NCBMIDEuNSAxLjEyNDUgTCAxLjM0MzggMSAiIHN0cm9rZT0iIzliOWI5YiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+DQoJPC9nPg0KPC9zdmc+" />
            </div>
            <div className="list">
              <div className="item flex center-vertical">
                <ul className="col-md-4 list-group">
               
                </ul>                                
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}

export default Schedule;