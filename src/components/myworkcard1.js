import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import keyboard_teal from '../assets/keyboard_teal.jpg'       

function MyWorkCard1() {              
  
  return ( 
    <div className='mywordcard card'>                 
        <img className='mycardimg' src={keyboard_teal} alt="Keyboard" /> 

        <h3>Featured 1</h3>
        <h3>Rock Paper Scissors</h3>
        <p>Rock, Paper, Scissors game which can be played against the computer or a friend.</p>
        <button className='myworkbtn'><span className='fa'><FontAwesomeIcon icon={['fas', 'laptop']} /></span><a href="http://m5fgn.co.uk/PHP/gamecard.php">Live</a>
        </button>
        <button className='myworkbtn'><span className='fa'><FontAwesomeIcon icon={['fas', 'laptop-code']} /></span><a href="https://github.com/M5FGN/MiniProjects/tree/master/Games/RockPaperScissors">Code</a>
        </button>
        <h4>Tech Used:</h4> 
          <img className='shields' src='https://img.shields.io/badge/-HTML-5c0f84?style=for-the-badge&logo=html5&logoColor=white' alt="HTML Logo"/> 
          <img className='shields' src='https://img.shields.io/badge/-CSS-5c0f84?style=for-the-badge&logo=CSS3&logoColor=white' alt="CSS Logo"/> 
          <img className='shields' src='https://img.shields.io/badge/-JQuery-5c0f84?style=for-the-badge&logo=JQuery&logoColor=white' alt="JQuery"/> 
          <img className='shields' src='https://img.shields.io/badge/-PHP-5c0f84?style=for-the-badge&logo=PHP&logoColor=white' alt="PHP"/> 
    </div>     
  );                          
}                           
export default MyWorkCard1; 