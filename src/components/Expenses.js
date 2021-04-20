import React from 'react';
import {connect} from 'react-redux';

 const Expenses = ({expenses}) =>  {
    return (
        <div className="financial-item-box">
           <div className="icon-container">
           <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
          </div>
          <span> Expenses</span>
          <h2> ${expenses}</h2>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        expenses: state.expenses.expenses
    }
}
export default  connect(mapStateToProps)(Expenses);