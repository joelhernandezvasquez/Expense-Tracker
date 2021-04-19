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


const Home = ({isTransactionFormOpen,openTransactionForm}) =>{
   
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
                  
                  <button onClick={openTransactionForm}>
                   Add Transactions
                  </button>
                  
               </section>
               
               <div className="transanction-modal-form">
               
                 {isTransactionFormOpen? <TransactionForm/> : ''} 
                 {isTransactionFormOpen? <Overlay/> : ''} 
               </div>
               
            </div>
        )
    }




const mapStateToProps = (state) =>{

   return{
     
     isTransactionFormOpen:state.isTransactionFormOpen.isTransactionFormOpen
   }
}

const mapDispatchToProps = dispatch =>{
   return{
     openTransactionForm: () => dispatch(openTransactionForm())
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);