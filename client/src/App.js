import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary'
import TimeSlots from './components/TimeSlots'
import {Card} from 'react-materialize'
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
    let timeState = [],
      count = -1
    for (let i = 9; i < 18; i++) {
      timeArr.push(i)
    }
    timeArr.map(time => {
      if (time > 12) {
        time = time - 12
        time = `${time}:00 p.m.`
      } else time = `${time}:00 a.m.`
      count++
      timeState.push({time: time, 
        name: '', 
        phoneNumber: 0, 
        infoEntered: false,
        index: count})
    })
    return timeState
  }

  saveInfo = (time, name, phoneNumber, index) => {
    const newState = {time, name, phoneNumber, infoEntered: true, index}
    this.setState({
      slots: Object.assign([...this.state.slots], {[index]: newState})
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className='App'>
        <ErrorBoundary hasError={this.state.hasError}>
          <Card className='container'>{this.state.slots.length > 0 ? 
            <ErrorBoundary hasError={this.state.hasError}>
              <TimeSlots slotState={this.state.slots} saveInfo={this.saveInfo}/>
            </ErrorBoundary> : ''}
          </Card>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

