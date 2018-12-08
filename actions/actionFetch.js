import {default as isoFetch} from 'isomorphic-fetch';
import React from 'react';

import {connect} from 'react-redux';

function updateAJAXStorage(info) {
    
        var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
        var updatePassword;
        var stringName='YULOVA_FD3_PROJECT';

    var refreshData = () => {
        isoFetch(ajaxHandlerScript, {
            method: 'post',
            data : { f : 'LOCKGET', n : stringName, p : updatePassword },
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
                    return lockGetReady; // дальше запускаем загрузку новых данных на бэк
            })
            .catch( (error) => {
                this.fetchError(error.userMessage||error.message);
            })
        };

        var lockGetReady = (callresult) => {
            if ( callresult.error!=undefined ){
            console.log(callresult.error); 
        } else {
            isoFetch(ajaxHandlerScript, {
                method: 'post',
                data : { f : 'UPDATE', n : stringName, v : JSON.stringify(info), p : updatePassword },
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
    }

    refreshData();
}
export default updateAJAXStorage;