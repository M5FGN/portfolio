import React from 'react';  
import BlogPost1 from './blogpost1';  
import BlogPost2 from './blogpost2';  
import BlogPost3 from './blogpost3';         

function Blog() {  
  

  
  return (   
    <div>
      <a className="jump_to" name="blog"><span>Arrived at the My Blog Section</span></a>               
     <h2>Blog</h2>
     <div className='cards'>  
        <BlogPost1/>
        <BlogPost2/>
        <BlogPost3/>
     </div>
    </div>                 
     
  );                          
}                           
export default Blog;  