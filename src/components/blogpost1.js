import React from 'react';  
import keyboard from '../assets/keyboard.jpg'         

function BlogPost1() {              
  
  return (                    
    <div class='myblogcard card'>
      <img class='mycardimg' src={keyboard} alt="Keyboard" /> 
      <h3>Blog 1</h3>
      <h4>Enter Date</h4>
      <p>Description</p>
      <h4>Tags:</h4>
      {/* TODO Add Tags  */}
    </div>   
  );                          
}                           
export default BlogPost1;  