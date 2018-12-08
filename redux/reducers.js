import { combineReducers } from 'redux';

import receiptReducers from "./receiptReducers";

let combinedReducer=combineReducers({
    receipts: receiptReducers,
});

export default combinedReducer;