import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import keyboard_teal from '../assets/keyboard_teal.jpg'       

function MyWorkCard1() {              
  
  return ( 
    <div class='mywordcard card'>                 
        <img class='mycardimg' src={keyboard_teal} alt="Keyboard" /> 

        <h3>Fearured 1</h3>
        <p>Description</p>
        <button class='myworkbtn'><span class='fa'><FontAwesomeIcon icon={['fas', 'laptop']} /></span>Live</button>
        <button class='myworkbtn'><span class='fa'><FontAwesomeIcon icon={['fas', 'laptop-code']} /></span>Code</button>
        <h4>Tech Used:</h4>
        {/* TODO Add Tech Used */}
    </div>     
  );                          
}                           
export default MyWorkCard1; 