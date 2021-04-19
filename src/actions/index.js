

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



