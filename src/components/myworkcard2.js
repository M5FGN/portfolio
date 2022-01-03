import React from 'react';
// import './../App.css';  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
// import keyboard_teal from '../assets/keyboard_teal.jpg'       

function MyWorkCard2() {              
  
  return ( 
    <div class='mywordcard'>                 
        {/* <img class='myworkimg' src={keyboard_teal} alt="Keyboard" />  */}
        <h3>Fearured 2</h3>
        <p>Description</p>
        <button class='myworkbtn'><span class='fa'><FontAwesomeIcon icon={['fas', 'laptop']} /></span>Live</button>
        <button class='myworkbtn'><span class='fa'><FontAwesomeIcon icon={['fas', 'laptop-code']} /></span>Code</button>
        <h4>Tech Used:</h4>
        {/* TODO Add Tech Used */}
    </div>     
  );                          
}                           
export default MyWorkCard2; 