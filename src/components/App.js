import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import TransactionHistory from './TransactionHistory';



const App = () =>{
    return(
       <Router>
         <div className="wrapper">
           
           <NavBar/>
           <Switch>
            
             <Route exact path="/">
                <Home/>
             </Route>
              
             <Route path="/transaction">
                <TransactionHistory/>
             </Route>

           </Switch>
        </div>
       </Router>
       
    )
}

export default App;