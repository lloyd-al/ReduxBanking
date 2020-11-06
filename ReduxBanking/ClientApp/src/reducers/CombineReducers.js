import { combineReducers } from 'redux';

import BankingReducer from './BankingReducer'
import AuthReducers from './AuthReducers'

export const rootReducer = combineReducers({
    auth: AuthReducers,
    banking: BankingReducer
})

//store = {
//    auth,
//    banking
//}