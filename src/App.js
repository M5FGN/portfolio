import React from 'react';    
import './App.css';  
import Header from './components/header';  
import MyWork from './components/mywork';       
import Blog from './components/blog';
import Contact from './components/contact';
import About from './components/about';
import Footer from './components/footer';

function App() {              
  
  return (                    
    <div>
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
