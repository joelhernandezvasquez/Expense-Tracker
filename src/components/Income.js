import React from 'react'
import {connect} from 'react-redux';

const Income = ({income})  =>{
    return (
        <div className="financial-item-box">
            <div className="icon-container">
            <i class="fa fa-line-chart" aria-hidden="true"></i>
          </div>
          <span>$Income</span>
          <h2> ${income}</h2>
        </div>
    )
}

const mapStateToProps = (state) =>{
 return{
     income: state.income.income
 }
}
export default connect(mapStateToProps)(Income);
