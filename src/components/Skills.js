import React from 'react'
import './Skills.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { color } from '@mui/system';
import { colors } from '@mui/material';


const Skills = () => {
  return (
    <section id="skills"> 
    <div><h1 className='sk_name' >Skills</h1></div>
      <div className='sk_wrapper' >
        <div className='spam' >
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:"yellow"}} ><JavascriptIcon/></Button>
        </Box>
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:"yellow"}} ><JavascriptIcon/></Button>
        </Box>
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:"yellow"}} ><JavascriptIcon/></Button>
        </Box>
        </div>
      </div>
  </section>
  )
}

export default Skills