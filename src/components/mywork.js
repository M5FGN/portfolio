
import React from 'react';  
import MyWorkCard1 from './myworkcard1';            
import MyWorkCard2 from './myworkcard2'; 
import MyWorkCard3 from './myworkcard3'; 

function MyWork() {              
  
  return (   
    <div> 
      <a className="jump_to" name="mywork"><span>Arrived at the My Work Section</span></a>               
      <h2>My Work</h2>   
      <div className="cards">
        <MyWorkCard1/>  
        <MyWorkCard2/>  
        <MyWorkCard3/> 
        </div>
        
        <div className="work_icons">

        
        <h3 className="work_more">See more of my work ...</h3>
         <a href="https://codepen.io/m5fgn" target="_blank" rel="noreferrer"><img className='shields' src='https://img.shields.io/badge/codepen-5c0f84?style=for-the-badge&logo=codepen&logoColor=white' alt="Logo"/></a>
         <a href="https://github.com/M5FGN" target="_blank" rel="noreferrer"><img className='shields' src='https://img.shields.io/badge/github-5c0f84?style=for-the-badge&logo=github&logoColor=white' alt="Logo"/></a>

 </div>
        
  
     </div> 

  );                          
}                           
export default MyWork;  