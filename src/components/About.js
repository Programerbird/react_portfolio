import React from 'react'
import './About.css'
import pfp from '../Pictures/pfp.jpg'
const About = () => {
  return (
    <section id="about"> 
      <div className='ab_wrapper' >
        
        <h1>About</h1>
        
         <img  src={pfp} alt='pfppic'/>
         <div className='abouttext' >
         <h1 className='info' >I'm a front end developer with one years of experience in web development.<br></br> I've worked on a variety of projects<br></br> I'm passionate about creating great user experiences and have a strong understanding of usability<br></br> and accessibility standards.</h1>
         </div>
      </div>
    </section>
   
  )
}

export default About