import React from 'react';
import styled from 'styled-components';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Background from '../../build/images/background.jpg';
import Overlay from '../../build/images/overlay.png';

const StyledOverlay = styled.div`
  background-image: url(${Overlay});
  width: 100%;
  height: 500px;
  background-attachment: fixed;
  background-size: cover;
  bakground-repeat: noRepeat;
  z-index: 3;
  margin-top: -450px;
`;

const StyledNav = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  background-color: whitesmoke;
  z-index: -1;
  h2 {
    margin: 10px 0px 0px 20px;
  }
`;

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
      {/* <section style={navStyle}>
        <h2>SPLIT.io</h2>
      </section> */}
      <StyledNav>
        <h2>Split.io</h2>
      </StyledNav>
      {/* <section style={overlayStyle} /> */}
      <StyledOverlay />
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