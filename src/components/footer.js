import React from 'react';            

function getCopyrightYear() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return currentYear;
}
function Footer() {              
  
  return ( 
    <div id='footer'>
      <h1>Footer</h1>
      <p>Copyright: Mary Fagan 	&copy; {getCopyrightYear()}</p>
    </div>                   
        
  );                          
}                           
export default Footer; 