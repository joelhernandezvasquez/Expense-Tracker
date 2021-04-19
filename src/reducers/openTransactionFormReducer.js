

const initialState = {
    isTransactionFormOpen:false,
    
}

const openTransactionFormReducer= (state = initialState, action ) =>{
    
    switch(action.type)
       {
         case'OPEN_TRANSACTION_FORM': return{
             ...state,
             isTransactionFormOpen: ! state.isTransactionFormOpen
         }
   
         default: return state;
       }
   
   }

   export default openTransactionFormReducer;
   