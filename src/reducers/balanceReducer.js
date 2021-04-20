

const initialState = {
    balance:0.00
}

const incrementBalanceReducer = (state = initialState,action) =>
{
    switch(action.type)
    {
        case 'INCREMENT_BALANCE': return{
            ...state,
            balance:state.balance + parseFloat(action.payload)
        }

        case 'DECREMENT_BALANCE': return{
            ...state,
            balance:state.balance - parseFloat(action.payload)
        }

        default:return state
    }
}

export default incrementBalanceReducer;