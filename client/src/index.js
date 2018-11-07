import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './store'
import penderMiddleware from 'redux-pender'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(penderMiddleware())))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();
