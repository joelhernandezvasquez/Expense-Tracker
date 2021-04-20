import React, { Component } from 'react';
import { connect } from 'react-redux';
import Transaction from './Transaction';
import '../Sass/main.scss';
import '../Sass/StyleComponents/transaction-history.scss';

class TransactionHistory extends Component {
    render() {
        return (
            <div className="transaction-history">
                <div className="transaction-container container">
                    <h1>Transaction history</h1>
                    {this.props.transactions.map(transaction => {
                        return <Transaction transaction={transaction}/>
                     })}
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions.transactions
  }  
}

export default connect(mapStateToProps)(TransactionHistory);
