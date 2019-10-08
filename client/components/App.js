import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>log in:</h1>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="password"></input>
        <input type="submit"></input>
      </div>
    )
  }
}

export default App;