
import React from 'react';  
import MyWorkCard1 from './myworkcard1';            
import MyWorkCard2 from './myworkcard2'; 
import MyWorkCard3 from './myworkcard3'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

function MyWork() {              
  
  return (   
    <div>                
      <h2>My Work</h2>   
      <div className="cards">
        <MyWorkCard1/>  
        <MyWorkCard2/>  
        <MyWorkCard3/> 
        </div>
        
        <div className="work_icons">
        <ul>
        
        <h3 className="work_more">See more of my work ...</h3>
     <li><a href="https://github.com/M5FGN"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
     <li><a href="https://codepen.io/m5fgn"><FontAwesomeIcon icon={['fab', 'codepen']} /></a></li>
 </ul> 
 </div>
        
  
     </div> 

  );                          
}                           
export default MyWork;  