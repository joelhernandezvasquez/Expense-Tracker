

export const openTransactionForm = () =>{
    return{
        type:'OPEN_TRANSACTION_FORM'
    }
}

export const addTransaction = (transaction) =>{
  
    return{
     type:'ADD_TRANSACTION',
     payload:transaction
 }
}

export const incrementBalance = (amount) =>{
   
     return{
        type:'INCREMENT_BALANCE',
        payload:amount
    }
}

export const addIncome = (amount) =>{
    return{
        type:'ADD_INCOME',
        payload:amount
    }
}

export const decrementBalance = (amount) =>{ 
    return{
       type:'DECREMENT_BALANCE',
       payload:amount
   }
}

export const addExpense = (amount) =>{
    return{
        type:'ADD_EXPENSE',
        payload:amount
    }
}



