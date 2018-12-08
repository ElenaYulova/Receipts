import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Page_ReceiptList from './Page_ReceiptList';
import Page_ChosenReceipts from './Page_ChosenReceipts';
import Page_Receipt from './Page_Receipt';
import Page_About from './Page_About';

import combinedReducer from '../redux/reducers.js';

let store=createStore(combinedReducer);

class PagesRouter extends React.Component{
          
  render(){

    return(
      <Provider store={store}>
        <div>
          <Route path="/receiptlist" component={Page_ReceiptList}/>
          <Route path="/chosenreceipts" component={Page_ChosenReceipts}/>
          <Route path="/" exact component={Page_About}/>
          <Route path="/about" component={Page_About}/>
          <Route path="/receipt/:rcid" component={Page_Receipt} />
        </div>
        </Provider>
    );
  
  }

}
    
export default PagesRouter;
    