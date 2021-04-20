
const initialState = {
    income:0.00
}

const addIncomeReducer = (state = initialState,action) =>{

    switch(action.type)
    {
        case 'ADD_INCOME':return{
            ...state,
            income: state.income + parseFloat(action.payload)
        }

        default: return state
    }
}

export default addIncomeReducer;