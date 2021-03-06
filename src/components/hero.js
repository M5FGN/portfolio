import React from 'react';    
import hero_img from '../assets/hero_img.png'

     


function Hero() {              
  
  return ( 
      <div className='hero'>  
         <div className="hero-left"><h1 className="hero_header">Eat, Sleep, Code, Repeat</h1>
         <p className="hero_text">Turning coding from a hobby into a career during the pandemic. </p>
         <p className="hero_text">Code Clan Graduate now working as a Junior Software Developer.</p>
         </div>
         <div className="hero-right"><img className="hero_img" src={hero_img} alt="Cartoon" /> </div>

     </div>
 
  );                          
}                           
export default Hero;  