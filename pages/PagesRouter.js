import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import {connect} from 'react-redux';
import {default as isoFetch} from 'isomorphic-fetch';

import PagesLinks from './PagesLinks';

import Page_ReceiptList from './Page_ReceiptList';
import Page_ChosenReceipts from './Page_ChosenReceipts';
import Page_Receipt from './Page_Receipt';
import Page_About from './Page_About';


import combinedReducer from '../redux/reducers.js';

import { create_receipt_list } from '../redux/receiptsAC';


class PagesRouter extends React.Component{

  constructor(props) {
    super(props);
    this.loadData();
  }
  state = { //
    dataReady: false, //готовность данных
    receipts: {}, //собственно список рецептов
  };

  fetchError = (errorMessage) => { //текст ошибки в консоли при проблеме с получением данных
    let errString = "Data has not been received";
    console.error(errString);
  };

  fetchSuccess = (loadedData) => {
    console.log(loadedData);
    let receiptsArr = loadedData.result;
    // console.log(receiptsArr);
    this.setState({
      dataReady:true,
      receipts: receiptsArr,
    });
    console.log(this.state);
  };

loadData = () => {
  let searchParams = new URLSearchParams();
  searchParams.append("f", "READ");
  searchParams.append("n", "YULOVA_FD3_PROJECT");

    isoFetch("https://fe.it-academy.by/AjaxStringStorage2.php", {
        method: 'POST',
        
        body: searchParams,
      
        headers: {
          "Accept": "application/json",
        },
    })
        .then( (response) => { // response - HTTP-ответ
            if (!response.ok) {
                let Err=new Error("fetch error " + response.status);
                Err.userMessage="Ошибка связи";
                throw Err; // дальше по цепочке пойдёт отвергнутый промис
            }
            else
                return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
        })
        .then( (data) => {
            try {
                this.fetchSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
            }
            catch ( error ){
                this.fetchError(error.message); // если что-то пошло не так - дальше по цепочке пойдёт отвергнутый промис
            }
        })
        .catch( (error) => {
            this.fetchError(error.userMessage||error.message);
        })
    ;

  };
  componentWillMount() {
    this.props.dispatch( create_receipt_list(this.state.receipts) );
  }

  render(){

    return(
      <BrowserRouter>
      <div>
      <PagesLinks />
        <div>
          
          <Route path="/receiptlist" component={Page_ReceiptList}/>
          <Route path="/chosenreceipts" component={Page_ChosenReceipts}/>
          <Route path="/" exact component={Page_About}/>
          <Route path="/about" component={Page_About}/>
          <Route path="/receipt/:rcid" component={Page_Receipt} />
          
        </div>
        </div>
        </BrowserRouter>
    );
  
  }

};
   const mapStateToProps = function (state) {
     console.log(state.receipts.receipts);
    return {
      receipts: state.receipts,
    };
  }; 
export default connect(mapStateToProps)(PagesRouter);
    