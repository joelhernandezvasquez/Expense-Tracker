import React from 'react';
import Balance from './Balance';
import Income from './Income';
import Expenses from './Expenses';
import '../Sass/main.scss';
import '../Sass/StyleComponents/home.scss';

class Home extends React.Component{
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
                
                </div>
               </section>

               <section className="report">

               </section>
            </div>
        )
    }
}

export default Home;