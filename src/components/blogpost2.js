import React from 'react';  
import keyboard from '../assets/keyboard.jpg'         

function BlogPost2() {              
  
  return (                    
    <div class='myblogcard'>
      <img class='myblogimg' src={keyboard} alt="Keyboard" /> 
      <h3>Blog 2</h3>
      <h4>Enter Date</h4>
      <p>Description</p>
      <h4>Tags:</h4>
      {/* TODO Add Tags  */}
    </div>   
  );                          
}                           
export default BlogPost2;  