


const ADD_NEW_RECEIPT='ADD_NEW_RECEIPT';
const FIND_RECEIPT='FIND_RECEIPT';
const CHOOSE_RECEIPT='CHOOSE_RECEIPT';





const add_new_receipt = function (receipts) {
    return {
        type: ADD_NEW_RECEIPT,
        payload: receipt,
    };
}

const find_receipt = function (receipts) {
    return {
        type: FIND_RECEIPT,
        receipts: receipts,
        value: findValue,
    };
}

const choose_receipt = function (receiptId) {
    return {
        type: CHOOSE_RECEIPT,
        receiptId: receiptId,
    };
}

export {

    add_new_receipt, ADD_NEW_RECEIPT,
    find_receipt, FIND_RECEIPT,
    choose_receipt, CHOOSE_RECEIPT,
}