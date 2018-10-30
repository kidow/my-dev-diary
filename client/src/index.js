import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'gestalt/dist/gestalt.css';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './store'
import createLogger from 'redux-logger'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(createLogger())))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();
