import React from 'react'
import Transaction from './Transaction'

const TransationList = () => {
    return (
        <div className="transaction-container">
            <h2> Recent Transactions</h2>

            <Transaction/>
        </div>
    )
}
export default TransationList;
