import React from 'react';    
import './App.css';  
import Header from './components/header';  
import MyWork from './components/mywork';       
import Blog from './components/blog';
import Contact from './components/contact';
import About from './components/about';
import Footer from './components/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fab, far, fas )

function App() {              
  
  return (                    
    <div className='pagecontainer'>
      <Header/> 
      <MyWork/>
      <Blog/>
      <Contact/>
      <About/>
      <Footer/>
    </div>    
  );                          
}                           
export default App;  
