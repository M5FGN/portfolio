import React, {useState, useEffect} from 'react';       

function BlogPost1() {  

  const [loadBlog, setBlog] = useState("");

  useEffect(() => {
    fetchBlog();
}, [])

const fetchBlog = function() {
  const blog = fetch("https://dev.to/api/articles/1004536")
  .then((response) => response.json())
  .then((blogData) => {setBlog(blogData)})

  // NOTE - Include the console log to see the Promise Status in the console.
  console.log(blog);
}
  
  return (                    
    <div className='myblogcard card'>
      {/* <img className='mycardimg' src={keyboard} alt="Keyboard" />  */}
      <img className='mycardimg' src={loadBlog.social_image} alt="Keyboard" /> 
      <h3 className="blogtitle">{loadBlog.title}</h3>
      <h4>Published: {loadBlog.readable_publish_date}</h4>
      <p>{loadBlog.description}</p>
      <h4 className="taglist">{loadBlog.tag_list}</h4>
      <h4><a className="myblogcard_button" href={loadBlog.canonical_url} target="_blank">Read</a></h4>
      
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