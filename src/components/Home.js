import React from 'react'
import './Home.css'
import Button from '@mui/material/Button';

const Home = () => {
  return (
    
    <section id="Home"> 
        <div className='home__wrapper'>
          <div className='wrapper' >
            <h1> Hi ,<br/>I'm Miguel <br/>Frontend Developer</h1>
              <div className='co' >
              <Button  variant="outlined" size="large">
                Contact
              </Button>
              </div>
          </div>
      
       </div>
    </section>
  
  )
}

export default Home