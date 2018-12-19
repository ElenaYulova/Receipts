

import appData  from '../appData';
import {CREATE_RECEIPT_LIST, ADD_NEW_RECEIPT, DELETE_RECEIPT, CHOOSE_RECEIPT} from './receiptsAC'


const initState={
    receipts: appData,
  };



function receiptReducer(state=initState, action) {

    switch (action.type) {
        case CREATE_RECEIPT_LIST: {
            let newState={...state};
            nesState.receipts = action.receipts;
            console.log("новый стейт "+ newState)  ;    
            return newState
        } 

        case ADD_NEW_RECEIPT: {
            
            let newReceiptID = state.receipts[state.receipts.length-1].id + 1;
            let receipt = {...action.newReceipt, id: newReceiptID};
            
            let newState = {...state, receipts: {...state.receipts, receipt}};
            
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
                    newState.receipts.splice(0, i);    
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

