//Action
//const deposit = {
//    type: "DEPOSIT",
//    amount: 20
//}

//const withdraw = {
//    type: "WITHDRAW",
//    amount: 30
//}

//const collectInterest = {
//    type: "COLLECT_INTEREST"
//}

//const deleteAccount = {
//    type: "DELETE_ACCOUNT"
//}

export const deposit = (amount) => {
    return({ type: "DEPOSIT", amount: parseInt(amount) });
};

export const withdraw = (amount) => {
    return({ type: "WITHDRAW", amount: parseInt(amount) });
};

export const collectInterest = () => {
    return({ type: "COLLECT_INTEREST" });
};

export const deleteAccount = () => {
    return({ type: "DELETE_ACCOUNT" });
};

export const changeAccount = () => {
    return({ type: "CHANGE_ACCOUNT_TYPE" });
};
