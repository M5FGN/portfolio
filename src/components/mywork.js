
import React from 'react';  
import MyWorkCard1 from './myworkcard1';            
import MyWorkCard2 from './myworkcard2'; 
import MyWorkCard3 from './myworkcard3'; 

function MyWork() {              
  
  return (   
    <div>                
      <h2>My Work</h2>   
      <div className="cards">
        <MyWorkCard1/>  
        <MyWorkCard2/>  
        <MyWorkCard3/> 
      </div> 
     </div> 

  );                          
}                           
export default MyWork;  