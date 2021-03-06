import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './app/containers/App';
import reducers from './app/reducers';

import './index.css';
import '../node_modules/@themesberg/flowbite/dist/flowbite.bundle.js'
import '@themesberg/flowbite';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#root'));
