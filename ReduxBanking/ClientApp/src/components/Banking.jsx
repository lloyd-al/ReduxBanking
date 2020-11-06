import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {deposit, withdraw, collectInterest, deleteAccount, changeAccount} from '../actions/BankingActions'

const Banking = () => {

    const [amount, setAmount] = useState("");
    const dispatch = useDispatch();

    const handleDeposit = () => {
        dispatch(deposit(amount));
    };

    const handleWithdraw = () => {
        dispatch(withdraw(amount));
    };

    const handleCollectInterest = () => {
        dispatch(collectInterest());
    };

    const handleDeleteAccount = () => {
        dispatch(deleteAccount());
    };

    const handleChangeAccount = () => {
        dispatch(changeAccount());
    };

    return (
        <div className="form-group row">
            <input type="text" className="form-control col-lg-2" value={ amount } onChange={ (e) => setAmount(e.target.value) } />
            &nbsp;<button onClick={handleDeposit} className="btn btn-success">Deposit</button>&nbsp;
            <button onClick={handleWithdraw} className="btn btn-primary">Withdraw</button>&nbsp;
            <button onClick={handleCollectInterest} className="btn btn-warning">Collect Interest</button>&nbsp;
            <button onClick={handleDeleteAccount} className="btn btn-danger">Delete Account</button>&nbsp;
            <button onClick={handleChangeAccount} className="btn btn-secondary">Change Account Type</button>
        </div>
    );
}

export default Banking;