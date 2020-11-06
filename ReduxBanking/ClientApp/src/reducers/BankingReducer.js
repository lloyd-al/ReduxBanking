﻿const initialState = {
    balance: 0,
    isSavingsAccount: false
};

const BankingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DEPOSIT":
            return { ...state, balance: state.balance + action.amount };
        case "WITHDRAW":
            return { ...state, balance: state.balance - action.amount };
        case "COLLECT_INTEREST":
            return { ...state, balance: state.balance * 1.03 };
        case "DELETE_ACCOUNT":
            return { ...state, balance: 0 };
        case "CHANGE_ACCOUNT_TYPE":
            return { ...state, isSavingsAccount: !state.isSavingsAccount };
        default:
            return (state);
    }
}

export default BankingReducer;