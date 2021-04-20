import React from 'react';
import {connect} from 'react-redux';
import {openTransactionForm} from '../actions';
import {addTransaction} from'../actions';
import {incrementBalance} from '../actions';
import {decrementBalance} from '../actions';
import {addIncome} from '../actions';
import {addExpense} from '../actions';
import {useState,useEffect} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TransactionForm = ({openTransactionForm,addTransaction,transactions,balance,incrementBalance,decrementBalance,addIncome,addExpense}) => {
    
    const[purchaseText,setPurchaseText] = useState('');
    const [transactionDate,setTransactionDate] =useState(new Date())
    const[typeTransaction,setTypeTransaction] = useState("");
    const[amount,setAmount] = useState("0.00");
    

   useEffect(()=>{
     
     return(()=>{
       setPurchaseText("");
       setAmount("0.00");
     })
   },[transactions])

    const onHandleTransaction = (e) =>{
        
      if(checkEmptyFields())
      {
        addTransaction(setTransaction());
        setBalance();
      }
    
    }

    const checkEmptyFields = () =>{
      
      if(purchaseText ==="")
      {
        alert("please fill out all required fields.")
        return;
      }
      
      if(typeTransaction==="")
      {
        alert("please fill out all required fields.")
        return;
      }
      if(amount==null)
      {
        alert("please fill out all required fields.")
        return;
      }


      return true;
    }

    const setTransaction = () =>{
      const [date] = transactionDate.toLocaleDateString("en-US").split("/");
      const year = transactionDate.getFullYear();
      const month = transactionDate.toLocaleString("default", { month: "short" })
      const dateString = (`${date} ${month} ${year.toString()}`);
       
      return{
        purchase:purchaseText,
        date:dateString,
        transactionType:typeTransaction,
        amount:amount
      }
    }

    const setBalance = () =>{
      
      if(typeTransaction ==='income')
      {
        incrementBalance(amount);
        addIncome(amount);
        return;
      }

      if(typeTransaction ==='expense')
      {
        if(verifyExpense())
        {
        decrementBalance(amount);
        addExpense(amount);
        }
        else{
          alert("this expense exceeds the current balance");
        }
        return;
      }

      
    }

    const verifyExpense = () =>{
       return amount <= balance;
    }



    return (
        <div className="transaction-modal">
            
            <form>
                <div className="input">
                    <label>Purchase</label>
                    <input type="text" value ={purchaseText} onChange={(e) => setPurchaseText(e.target.value)}/>
                </div>

                <div className="input">
                  <label> Select Date</label>
                  <DatePicker selected={transactionDate} onChange={date => setTransactionDate(date)} />
                </div>

                <div className="input">
                    <label>Select Transaction</label>
                    <div className="radio-buttons-container">
                    
                     <label>Income</label>
                     <input type="radio" value="income" name="transaction"
                    
                      onChange = {(e) => setTypeTransaction(e.target.value)}
                     />

                     <label>Expense</label>
                     <input type="radio" value="expense" name="transaction"
                      onChange = {(e) => setTypeTransaction(e.target.value)}
                     />
                    </div>
                </div>

                <div className="input">
                     <label>Amount</label>
                     <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
                </div>

            </form>
            <button onClick={(e) => onHandleTransaction(e)}>
              Add Transaction
            </button>

            <button onClick={openTransactionForm}>
              close
            </button>
        </div>
    )
}

const mapStateToProps = (state) =>{

    return{
      isTransactionFormOpen:state.isTransactionFormOpen,
      transactions:state.transactions.transactions,
      balance:state.balance.balance
    }
 }
 
 const mapDispatchToProps = dispatch =>{
    return{
      openTransactionForm: () => dispatch(openTransactionForm()),
      addTransaction: (event) => dispatch(addTransaction(event)),
      incrementBalance: (event) => dispatch(incrementBalance(event)),
      decrementBalance: (event) => dispatch(decrementBalance(event)),
      addIncome: (event) => dispatch(addIncome(event)),
      addExpense: (event) => dispatch(addExpense(event))

    }
 }
export default connect(mapStateToProps,mapDispatchToProps)(TransactionForm);
