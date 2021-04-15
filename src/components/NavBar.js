import React from 'react';
import {Link} from 'react-router-dom';
import '../Sass/StyleComponents/navbar.scss';
import illustration from '../assests/metrics.svg';

const NavBar = () =>{
return(
  <div className="nav-bar-container">
      <h2> Tracker</h2>
      
      <nav>
          <ul>
              
              <Link to={{
                  pathname:'/'
              }}>
                    <li> <a href="#"> Home </a></li>
              </Link>
             

              <Link to={{
                  pathname:'/transaction'
              }}>
                 <li> <a href="#"> Transaction </a> </li> 
              
              </Link>
          </ul>
      </nav>

      <div className="illustraion-container">
      <img src={illustration} alt="photo"/>
      </div>
     

  </div>
)
}

export default NavBar;