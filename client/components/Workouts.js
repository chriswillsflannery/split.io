import React from 'react';
// import ReactDOM from 'react-dom';
const uuid = require('uuidv4').default;

export default class Workouts extends React.Component {
  constructor() {
    super();

    this.state = {
      workouts: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    fetch('/newworkout')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState(state => {
          let newWorkouts = state.workouts;
          newWorkouts.push(data);
          return newWorkouts;
        })
      })
      .catch(err => console.log("uh oh", err.stack));
  }

  render() {
    const items = [];
    this.state.workouts.forEach(workout => {
      const uniqueKey = uuid();
      items.push(<p key={uniqueKey}><strong>{workout[0]}</strong> {workout[1]}</p>)
    })
    return (
      <div>
        <h1>my splits:</h1>
        {items}
        <button onClick={this.handleClick}>
          get new workout
        </button>
      </div>
    )
  }
}