
import addTransactionReducer from './addTransactionReducer';
import {combineReducers} from 'redux';
import openTransactionFormReducer from './openTransactionFormReducer';

const allReducers = combineReducers({
  isTransactionFormOpen:openTransactionFormReducer,
  transactions:addTransactionReducer
})

export default allReducers;

