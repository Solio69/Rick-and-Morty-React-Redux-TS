import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';
import App from './App/App';


ReactDOM.render(
  <Router basename="/">
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
