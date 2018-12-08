import Receipts from '../appData';
import updateAJAXStorage from '../actions/actionFetch';

import { ADD_NEW_RECEIPT, FIND_RECEIPT, CHOOSE_RECEIPT} from './receiptsAC'

var receiptsList = require('../receipts.json');
var receipts = Receipts.receipts || receiptsList;

const initState={
    receipts: receipts,
  };

function receiptReducer(state=initState, action) {

    switch (action.type) {
            
        case ADD_NEW_RECEIPT: {
            let newState={...state};
            let newReceiptID = newState[newState.length-1].id++;
            let newReceipt = {...action.payload, id: newReceiptID};
            newState = {...newState, newReceipt};
            updateAJAXStorage(newState);
            console.log(newState);    
            return newState;
          }
        case FIND_RECEIPT: {
            let newState={...receipts};
            let filteredState = newState.map(receipt => {
                if (receipt.name.indexOf(value)>= 0){
                    return receipt;
                }
                
            })      
            console.log(filteredState)  ;    
            return filteredState;
        }
        case CHOOSE_RECEIPT: {
            let newState={...receipts};
            for (i=0; i<newState.length; i++) {
                if (newState[i].id = receiptId) {
                    newState[i].isSelected = !newState[i].isSelected;
                }
            }
            console.log(newState);    
            return newState;
        }
          default:
          return state;
    }
    
}

export default receiptReducer;