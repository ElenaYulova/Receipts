import { combineReducers } from 'redux';

import receiptReducers from "./receiptReducers";
// import modalReducers from "./modalReducers";

let combinedReducer=combineReducers({
    receipts: receiptReducers,
    // modalReducers,
});

export default combinedReducer;