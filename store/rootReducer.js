import { combineReducers } from '@reduxjs/toolkit';
// import userReducer from './slices/userSlice';
// import authReducer from './slices/authSlice';
import transactionsReducer from '../store/slices/transactionSlice';

const rootReducer = combineReducers({
  // user: userReducer,
  // auth: authReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
