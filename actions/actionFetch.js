
import React from 'react';
import {default as isoFetch} from 'isomorphic-fetch';
import {connect} from 'react-redux';
export default function updateAJAXStorage(info) {
    
    let ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
    let updatePassword = Math.random();;
    let stringName='YULOVA_FD3_PROJECT';

   var fetchError = (errorMessage) => { //текст ошибки в консоли при проблеме с получением данных
        let errString = "Data has not been received";
        console.error(errString);
      };
    
      var fetchSuccess = (loadedData) => {
        console.log(loadedData);
        let receiptsArr = loadedData.result;
        // console.log(receiptsArr);
        this.setState({
          dataReady:true,
          receipts: receiptsArr,
        });
        console.log(this.state);
      };

var refreshData = () => {
    let searchParams = new URLSearchParams();
    searchParams.append("f", "LOCKGET");
    searchParams.append("n", stringName);
    searchParams.append("p", updatePassword);

    isoFetch(ajaxHandlerScript, {
        method: 'post',
        body : searchParams,
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
            {
                // console.log("Data were prepared")
                return lockGetReady();} // дальше запускаем загрузку новых данных на бэк
        })
        .catch( (error) => {
            fetchError("Произошла ошибка при заливке");
        })
    };

    var lockGetReady = () => {
        

        let searchParams = new URLSearchParams();
    searchParams.append("f", "UPDATE");
    searchParams.append("n", stringName);
    searchParams.append("v", JSON.stringify(info));
    searchParams.append("p", updatePassword);

        isoFetch(ajaxHandlerScript, {
            method: 'post',
            body : searchParams,
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
                    return console.log("Data were sent"); // дальше запускаем загрузку новых данных на бэк
            })
            .catch( (error) => {
                this.fetchError(error.userMessage||error.message);
            })
    
}

refreshData();
}
