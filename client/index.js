import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import { Router, BrowserRouter } from 'react-router-dom';
// import routes from './routes';

//  import styles from './scss/application.scss';
const reactime = require('reactime');



ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Router history={BrowserRouter} routes={routes} />, document.querySelector('#root'));

reactime(document.getElementById('root'));