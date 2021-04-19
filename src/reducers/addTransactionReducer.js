

const initialState = {
   
    transactions:[]
}

const addTransactionReducer = (state = initialState,action) =>{
    switch(action.type)
    {
      case'ADD_TRANSACTION':return{
        ...state,
        transactions: state.transactions.concat(action.payload)
      }
      
      default: return state;
    }
  }

  export default addTransactionReducer;
