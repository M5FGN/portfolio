import React from 'react'; 
import MyWordCard1 from './myworkcard1';   
import MyWordCard2 from './myworkcard2';   
import MyWordCard3 from './myworkcard3';   

function MyWork() {              
  
  return ( 
  <div>
    <h2>My Work</h2>
    <div class='myworkcards'>                 
        <MyWordCard1/>
        <MyWordCard2/>
        <MyWordCard3/>
     </div> 
     </div>    
  );                          
}                           
export default MyWork;  