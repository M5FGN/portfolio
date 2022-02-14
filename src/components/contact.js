import React from 'react';    
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";        

function Contact() {              
  
  return (                    
     
     <div className="contact">
     <h2>Contact</h2> 
     
     <ul>
     <li><a href="mailto:m5fgn@outlook.com?subject=Message%20from%20Portfolio%20Website"><FontAwesomeIcon icon={["far", "envelope"]} /></a></li>
     <li><a href="https://www.linkedin.com/in/m5fgn/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
 </ul> 
 </div>
  );                          
}                           
export default Contact;  