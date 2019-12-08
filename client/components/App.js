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
  bakground-repeat: no-repeat;
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

const StyledBG = styled.div`
  background-image: url(${Background});
  width: 100%;
  height: 600px;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;

const StyledAuth = styled.div`
  background-color: #1f4994;
  opacity: .95;
  width: 400px;
  height: 400px;
  border-radius: 400px;
  position: absolute;
  top: 100;
  left: 50%;
  z-index: 5;
`;

const StyledLogin = styled.div`
  position: absolute;
  top: 160;
  left: 58%;
  z-index: 6;
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 5px;
  }
  input {
    margin: 5px;
  }
  .input {
    padding: 10px 50px;
    border-radius: 10px;
    border: none;
  }
  .submit {
    padding: 10px 30px;
    border-radius: 10px;
    border: none;
    background-color: #d2dbea;
  }
`;

const StyledLinks = styled.div`
  position: absolute;
  top: 600;
  left: 70%;
  z-index: 6;
  ul {
    display: flex;
    list-style-type: none;
  }
  a {
    color: white;
    margin: 5px;
  }
`;

const App = () => {
  return (
    <>
      <StyledNav>
        <h2>Split.io</h2>
      </StyledNav>
      <StyledOverlay />
      <StyledBG />
      <StyledAuth />
      <StyledLogin>
        <form method="POST" action='/login'>
          <input className="input" name="username" type="text" placeholder="username"></input>
          <input className="input" name="password" type="password" placeholder="password"></input>
          <input className="submit" type="submit" value="login"></input>
        </form>
        <form method="POST" action='/signup'>
          <input className="input" name="username" type="text" placeholder="username"></input>
          <input className="input" name="password" type="password" placeholder="password"></input>
          <input className="submit" type="submit" value="sign up"></input>
        </form>
      </StyledLogin>
      <StyledLinks>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </StyledLinks>
    </>
  )
}


export default App;