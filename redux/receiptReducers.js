import Receipts from '../appData';
import updateAJAXStorage from '../actions/actionFetch';
import appData  from '../appData';
import {CREATE_RECEIPT_LIST, ADD_NEW_RECEIPT, FIND_RECEIPT, CHOOSE_RECEIPT} from './receiptsAC'


const initState={
    receipts: appData,
  };

function receiptReducer(state=initState, action) {

    switch (action.type) {
        case CREATE_RECEIPT_LIST: {
            let newState={...state};
            
            console.log("новый стейт "+ newState)  ;    
            return newState
        } 

        case ADD_NEW_RECEIPT: {
            let newState={...state};
            let newReceiptID = newState[newState.length-1].id++;
            let newReceipt = {...action.payload, id: newReceiptID};
            newState = {...newState, newReceipt};
            updateAJAXStorage(newState);
            console.log(newState);    
            return newState;
          }
        // case FIND_RECEIPT: {
        //     let newState={...receipts};
        //     let filteredState = newState.map(receipt => {
        //         if (receipt.name.indexOf(value)>= 0){
        //             return receipt;
        //         }
                
        //     })      
        //     console.log(filteredState)  ;    
        //     return filteredState;
        // }
        case CHOOSE_RECEIPT: {
            let newState={...state};
            let receipts = newState.receipts
            for (let i=0; i<receipts.length; i++) {
                if (receipts[i].id = receiptId) {
                    if (receipts[i].isSelected){
                    receipts[i].isSelected = !receipts[i].isSelected;
                } else {
                    receipts[i].isSelected = true;
                }
                }
            }
            // updateAJAXStorage(newState.receipts);

            console.log(newState);    
            return newState;
        }
          default:
          return state;
    }
    
}

export default receiptReducer;

