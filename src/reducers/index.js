
import {combineReducers} from 'redux';
import addTransactionReducer from './addTransactionReducer';
import openTransactionFormReducer from './openTransactionFormReducer';
import balanceReducer from './balanceReducer';
import addIncomeReducer from './addIncomeReducer';
import addExpenseReducer from './addExpenseReducer';

const allReducers = combineReducers({
  isTransactionFormOpen:openTransactionFormReducer,
  transactions:addTransactionReducer,
  balance:balanceReducer,
  income:addIncomeReducer,
  expenses:addExpenseReducer
})

export default allReducers;

