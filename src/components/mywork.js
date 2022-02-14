
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
        
        <div className="myWork">
        <ul>
        
     <li><a href="mailto:m5fgn@outlook.com?subject=Message%20from%20Portfolio%20Website"><FontAwesomeIcon icon={["far", "envelope"]} /></a></li>
     <li><a href="https://www.linkedin.com/in/m5fgn/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
     <li><a href="https://github.com/M5FGN"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
     <li><a href="https://codepen.io/m5fgn"><FontAwesomeIcon icon={['fab', 'codepen']} /></a></li>
     <li><a href="https://twitter.com/m5fgn"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
 </ul> 
 </div>
        
  
     </div> 

  );                          
}                           
export default MyWork;  