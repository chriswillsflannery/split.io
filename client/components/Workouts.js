import React, { useState, useEffect } from 'react';

const uuid = require('uuidv4').default;

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]); // [workout, workoutDescription]
  const [items, updateItems] = useState([]); // [...all workouts and descriptions]
  const [userWorkouts, setUserWorkouts] = useState([]); // fetch this particular user's workouts on page load

  useEffect(() => { // because of empty array arg, only runs once on component load.

    fetch('/userworkouts')
      .then(res => {
        return res.json();
      })
      .then(data => {

        setUserWorkouts([...data])
      })
      .catch(err => {
        console.log("error: useEffect fetch failed.");
      })
  }, []);

  const handleClick = (e) => {
    // e.preventDefault();
    fetch('/newworkout')
      .then(res => {

        return res.json()
      })
      .then(data => {


        setWorkouts([data[0], data[1]]);
      })
      .then(() => {
        const uniqueKey = uuid();

        updateItems([...items, (<p key={uniqueKey}><strong>{workouts[0]}</strong> {workouts[1]}</p>)])
      })
      .catch(err => console.log("error in handleClick, ", err.stack));
  }

  return (
    <div>
      <h1>my splits:</h1>
      <button onClick={handleClick}>
        get new workout
      </button><br /><br />
      {userWorkouts}
      <p><strong>{workouts[0]}</strong> {workouts[1]}</p>
      {items}
    </div>
  )

}

export default Workouts;