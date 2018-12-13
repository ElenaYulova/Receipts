"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PagesRouter from './pages/PagesRouter';

import combinedReducer from './redux/reducers.js';
let store=createStore(combinedReducer);
ReactDOM.render( 
  <Provider store={store}>
  <PagesRouter />
</Provider>
, document.getElementById('container') );