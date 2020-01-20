import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.scss';

import Routes from './routes';
import HeaderText from './components/header-text';

ReactDOM.render(
  <div className="container">
    <div className="header-box">
      <HeaderText />
    </div>
    <Routes />
  </div>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
