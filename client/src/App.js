import React, { Component } from 'react';
import TimeSlots from './components/TimeSlots'
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      slots: []
    }
  }

  componentDidMount(){
    const timeState = this.createTimeSlotState()
    this.setState({
      slots: timeState
    })
  }

  createTimeSlotState(){
    const timeArr = []
    let timeState = []
    for (let i = 9; i < 18; i++) {
      timeArr.push(i)
    }
    timeArr.map(time => {
      if (time > 12) {
        time = time - 12
        time = `${time}:00 p.m.`
      } else time = `${time}:00 a.m.`
      timeState.push({time: time, name: '', phoneNumber: '', infoEntered: false})
    })
    return timeState
  }


  render() {
    return (
      <div className='App'>
        <div className='container'>{this.state.slots.length > 0 ? 
          <TimeSlots slotState={this.state.slots}/> : ''}
        </div>
      </div>
    );
  }
}

export default App;

