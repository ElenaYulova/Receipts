

import appData  from '../appData';
import {CREATE_RECEIPT_LIST, ADD_NEW_RECEIPT, DELETE_RECEIPT, CHOOSE_RECEIPT} from './receiptsAC'


const initState={
    receipts: appData,
  };



function receiptReducer(state=initState, action) {

    switch (action.type) {
        case CREATE_RECEIPT_LIST: {
            let newState={...state};
            let receiptsList = action.receiptsList;  
            newState.receipts = receiptsList;
            
            console.log("новый стейт "+ newState.receipts)  ;    
            return newState
        } 

        case ADD_NEW_RECEIPT: {
            let newState = {...state}
            let receipt = action.newReceipt;
            
            newState.receipts.splice((newState.receipts.length), 0, receipt)
            
            console.log(newState);    
            return newState;
          }
        
        case CHOOSE_RECEIPT: {
            let newState={...state};
            let receipts = newState.receipts;
            let receiptId = action.receiptId;
            for (let i=0; i<receipts.length; i++) {
                if ((receipts[i].id) == receiptId) {
                    if (receipts[i].isSelected){
                    receipts[i].isSelected = !receipts[i].isSelected;
                } else {
                    receipts[i].isSelected = true;
                }
                }
            }
            

            console.log(newState);    
            return newState;
        }
        case DELETE_RECEIPT: {
            let newState={...state};
            let receipts = newState.receipts;
            let receiptId = action.receiptId;
            for (let i=0; i<receipts.length; i++) {
                if ((receipts[i].id) == receiptId) {
                    newState.receipts.splice(i, 1);    
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

