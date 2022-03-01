import React, {useState, useEffect} from 'react';  
import keyboard from '../assets/keyboard.jpg'         

function BlogPost1() {  

  const [loadBlog, setBlog] = useState("");

  useEffect(() => {
    fetchBlog();
}, [])

const fetchBlog = function() {
  const blog = fetch("https://dev.to/api/articles/1004536")
  .then((response) => response.json())

  // FIXME - This is what is stopping the blog details from appearing
  // .then((details) => {setUser(details.results[0].name.first)})
  // .then((details) => {setBlog(details.results[0])})

  // NOTE - Include the console log to see the Promise Status in the console.
  console.log(blog);
}
  
  return (                    
    <div className='myblogcard card'>
      <img className='mycardimg' src={keyboard} alt="Keyboard" /> 
      <h3>{loadBlog.title}</h3>
      <h4>loadBlog.readable_published_at</h4>
      <p>loadBlog.description</p>
      <h4>loadBlog.tag_list</h4>
      
      {/* TODO Add Tags  */}
    </div>   
  );                          
}                           
export default BlogPost1;  


{/* <img src={userDetail.picture.large}></img>
<h1>{userDetail.name.first} {userDetail.name.last}</h1>
<p>{userDetail.location.city}, {userDetail.location.country}</p>
<p>{userDetail.email}</p>
<p>{userDetail.phone}</p>
<p>{userDetail.cell}</p> */}