import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
import keyboard_teal from '../assets/keyboard_teal.jpg'       


function MyWorkCard2() {              
  
  return ( 
    <div className='mywordcard card'>                 
        <img className='mycardimg' src={keyboard_teal} alt="Keyboard" /> 
        <h3>Fearured 2</h3>
        <p>Description</p>
        <button className='myworkbtn'><span className='fa'><FontAwesomeIcon icon={['fas', 'laptop']} /></span>Live</button>
        <button className='myworkbtn'><span className='fa'><FontAwesomeIcon icon={['fas', 'laptop-code']} /></span>Code</button>
        <h4>Tech Used:</h4>
        {/* TODO Add Tech Used */}
    </div>     
  );                          
}                           
export default MyWorkCard2; 