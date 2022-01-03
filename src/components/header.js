import React from 'react';    
import Navigation from './navigation';           
import Socials from './socials';

function Header() {              
  
  return ( 
      <div class='header'>  
      <div>             
          <h1>Logo</h1> 
      </div>    
      <div>
        <Navigation/>  
        <hr class='separator'></hr>
        <Socials/>
     </div>
     </div>  
  );                          
}                           
export default Header;  