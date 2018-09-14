import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      slots: [
         {
          time: 9,
          name: '',
          phoneNumber: ''
        },
        {
          time: 9,
          name: '',
          phoneNumber: ''
        },
        {
          time: 9,
          name: '',
          phoneNumber: ''
        }
      ]
    }
  }

  setTimeSlotState(){
    const timeArr = []
    for (let i = 9; i < 18; i++) {
      if(i > 12){
        i = i -12
      }
      timeArr.push(i)
    }
    console.log(timeArr)
    // this.setState({
    //   slot
    // })
  }

  render() {
    return (
      <div className="App">
        {this.setTimeSlotState()}
      </div>
    );
  }
}

export default App;
