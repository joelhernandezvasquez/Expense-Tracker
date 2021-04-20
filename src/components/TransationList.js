import React from 'react'
import Transaction from './Transaction'
import {connect} from 'react-redux';

const TransationList = ({transactions}) => {
 
  
    return (
        <div className="transaction-container">
            <h2> Recent Transactions</h2>
            
              {transactions.map(transaction =>{
                  return <Transaction transaction = {transaction}/>
              })}
          
            
        
        
        </div>
    )
}

const mapStateToProps = (state) =>{
    
    return{
        transactions:state.transactions.transactions
      }
}
export default connect(mapStateToProps)(TransationList);
