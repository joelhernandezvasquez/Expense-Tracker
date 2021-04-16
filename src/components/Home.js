import React from 'react';
import Balance from './Balance';
import Income from './Income';
import Expenses from './Expenses';
import '../Sass/main.scss';
import '../Sass/StyleComponents/home.scss';
import TransationList from './TransationList';
import PieChart from './PieChart';
import Report from './Report';
import TransactionForm from './TransactionForm';
import {openTransactionForm} from '../actions';
import Overlay from './Overlay';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';



class Home extends React.Component{
   
   
    
   OnHandleTransaction = () =>
    {
  
   this.props.openTransactionForm();
    }
    render() {

        return(
            <div className="home-container">
               
               <section className="dashboard">
                <div className="container">
                 <h1>Dashboard</h1>
                 <p>Check all of your information</p>
                 
                 <div className="financial-items-container">
                   <Balance/>
                   <Income/>
                   <Expenses/>
                 </div>

                 <TransationList/>
                
                </div>
               
               </section>

               <section className="report">
                  
                  <PieChart/>
                  <Report/>
                  
                  <button onClick={this.OnHandleTransaction}>
                   Add Transactions
                  </button>
                  
               </section>
               
               <div className="transanction-modal-form">
                 
                 {this.props.isTransactionFormOpen? <TransactionForm/> : ''}
                 {this.props.isTransactionFormOpen? <Overlay/> : ''}
               </div>
               
            </div>
        )
    }
}



const mapStateToProps = (state) =>{
  console.log(state);
   return{
      isTransactionFormOpen:state.openTransactionForm
   }
}

export default connect(mapStateToProps,{openTransactionForm}) (Home);