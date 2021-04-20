import React from 'react'
import {connect} from 'react-redux'

 const Balance = ({balance}) => {
    return (
        <div className="financial-item-box">
          <div className="icon-container">
          <i class="fa fa-money" aria-hidden="true"></i>
          </div>
          <span> Balance</span>
          <h2> ${balance}</h2>
        </div>
    )
}

const mapStateToProps = (state) =>{
  return{
   balance: state.balance.balance
  }
}

export default connect(mapStateToProps)(Balance);
