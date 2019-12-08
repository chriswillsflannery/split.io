import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Background from '../../build/images/background.jpg';
import Overlay from '../../build/images/overlay.png';

const overlayStyle = {
  backgroundImage: `url(${Overlay})`,
  width: `100%`,
  height: `500px`,
  backgroundAttachment: `fixed`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  zIndex: `3`,
  marginTop: `-450`
}

const navStyle = {
  width: `100%`,
  height: `50px`,
  position: `fixed`,
  top: `0`,
  backgroundColor: `whitesmoke`,
  zIndex: `-1`,
}

const bgStyle = {
  backgroundImage: `url(${Background})`,
  width: `100%`,
  height: `500px`,
  backgroundAttachment: `fixed`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  zIndex: `1`
}

const App = () => {
  return (
    <>
      <section style={navStyle} />
      <section style={overlayStyle} />
      <section style={bgStyle} />
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
    </>
  )
}


export default App;