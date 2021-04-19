import React from 'react'


const  Transaction = ({transaction}) => {
    return (
        <div className="transaction">
            
            <div className="transaction-details">
              <p>{transaction.purchase}</p>
              <p>{transaction.date}</p>
            </div>

            <div className="transaction-balance">
            <p>{transaction.amount}</p>
            </div>
        </div>
    )
}
export default Transaction;
