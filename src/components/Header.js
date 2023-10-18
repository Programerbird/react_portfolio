import React from 'react'
import './Header.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section id="header"> 
        
        <div className='main_wrapper' >
            
                <div className='main_buttons' >
                    <div className='button' >
                    <a href="#Home" className='button'>
                    <Button variant="contained" color="success">Home</Button> 
                    </a>
                    <a href="#about" className='button'>
                    <Button variant="contained" color="success">About</Button> 
                    </a>
                    <a href="#skills" className='button'>
                    <Button variant="contained" color="success">Skills</Button> 
                    </a>
                    <a href="#project" className='button'>
                    <Button variant="contained" color="success">Project</Button> 
                    </a>
                    <a href="#contact" className='button'>
                    <Button variant="contained" color="success">Contact</Button> 
                    </a>
                          
                    </div>
                </div>
        </div>
    
     </section>
    
  )
}

export default Header