import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Socials() {

    return ( 
    <div class='socialbar'>
        <ul>
            <li><a href="mailto:m5fgn@outlook.com?subject=Message%20from%20Portfolio%20Website"><FontAwesomeIcon icon={["far", "envelope"]} /></a></li>
            <li><a href="https://www.linkedin.com/in/m5fgn/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
            <li><a href="https://github.com/M5FGN"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
            <li><a href="https://codepen.io/m5fgn"><FontAwesomeIcon icon={['fab', 'codepen']} /></a></li>
            <li><a href="https://twitter.com/m5fgn"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
        </ul> 
   </div>                   

    );
}
export default Socials;