import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <div>
      <h1>log in:</h1>
      <form method="POST" action='/login'>
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input type="submit" value="login"></input>
      </form>
      <h1>sign up:</h1>
      <form method="POST" action='/signup'>
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input type="submit" value="sign up"></input>
      </form>
    </div>
  )
}


export default App;