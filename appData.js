"use strict";
import {default as isoFetch} from 'isomorphic-fetch';
import React from 'react';

import {connect} from 'react-redux';
class Receipts extends React.PureComponent{

constructor() {
    super(props)
    receipts = this.loadData(); //исходные данные класса загружаются через fetch
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
    this.setState({
      dataReady:true,
      receipts:loadedData,
    });
  };

loadData = () => {

    isoFetch("https://fe.it-academy.by/AjaxStringStorage2.php", {
        method: 'post',
        data : { f : 'READ', n :"YULOVA_FD3_PROJECT", p : "admin" },
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

  mapStateToProps = function (state) {
    return {
        receipts: state.receipts,
    }
  };


};
export default connect(mapStateToProps)(Receipts);
