import React from 'react';      
import heart from '../assets/heart.png'

function getCopyrightYear() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return currentYear;
}
function Footer() {              
  
  return ( 
    <div id='footer'>
      <hr/>
      <p><img className="heart" src={heart} alt="heart" /> <span className="footertext">Copyright: Mary Fagan 	&copy; {getCopyrightYear()}</span> <img className="heart" src={heart} alt="heart" /></p> 
    </div>                   
        
  );                          
}                           
export default Footer; 