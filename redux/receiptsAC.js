


const ADD_NEW_RECEIPT='ADD_NEW_RECEIPT';
const FIND_RECEIPT='FIND_RECEIPT';
const CHOOSE_RECEIPT='CHOOSE_RECEIPT';
const CREATE_RECEIPT_LIST = 'CREATE_RECEIPT_LIST';
const DELETE_RECEIPT = 'DELETE_RECEIPT';

const create_receipt_list = function (receiptsList) {
    return {
        type: CREATE_RECEIPT_LIST,
        receiptsList: receiptsList,
    }
}

const add_new_receipt = function (newReceipt) {
    return {
        type: ADD_NEW_RECEIPT,
        newReceipt: newReceipt,
    };
}


const choose_receipt = function (receiptId) {
    return {
        type: CHOOSE_RECEIPT,
        receiptId: receiptId,
    };
}

const delete_receipt = function (receiptId) {
    return {
        type: DELETE_RECEIPT,
        receiptId: receiptId,
    };
}

export {
    create_receipt_list, CREATE_RECEIPT_LIST,
    add_new_receipt, ADD_NEW_RECEIPT,
    choose_receipt, CHOOSE_RECEIPT,
    delete_receipt, DELETE_RECEIPT,
}