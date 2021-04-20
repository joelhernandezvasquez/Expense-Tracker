import { act } from "react-dom/test-utils"

const initialState = {
    expenses:0.00
}


const addExpenseReducer = (state = initialState,action) =>{
    
    switch(action.type)
    {
        case 'ADD_EXPENSE': return{
            ...state,
            expenses: state.expenses + parseFloat(action.payload)
        }

        default: return state
    }
}

export default addExpenseReducer;
