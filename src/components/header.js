import React from 'react';    
import Navigation from './navigation';           
import Socials from './socials';

function Header() {              
  
  return ( 
      <div className='header'>  
      <div>             
          <h1>Logo</h1> 
      </div>    
      <div>
        <Navigation/>  
        <hr className='separator'></hr>
        <Socials/>
     </div>
     </div>  
  );                          
}                           
export default Header;  