import React from 'react'
import './Skills.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { color } from '@mui/system';
import { colors } from '@mui/material';
import python from '../icons/python.ico'
import { BiLogoPython,BiLogoReact,BiLogoHtml5,BiLogoCss3 } from 'react-icons/bi';
import { TbBrandCpp } from 'react-icons/tb';
import {JavaScriptIcon,Python} from '../svgs/Javascript'


const Skills = () => {
  return (
    <section id="skills"> 
    <div><h1 className='sk_name' >Skills</h1></div>
      <div className='sk_wrapper' >
        <div className='icons' >
          <Python></Python>
        <JavaScriptIcon 
          style={{
            height:"100px",
            width: "100px"
          }}
        />
        <Box  component="span" sx={{ p: 1, border: '1px dashed grey' }}>
        <Button style={{color:"yellow"}} ></Button>
        </Box>
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:""}} ><BiLogoPython/></Button>
        </Box>
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:"white"}} ><TbBrandCpp/></Button>
        </Box>
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:"Cyan"}} ><BiLogoReact/></Button>
        </Box>
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:"orange"}} ><BiLogoHtml5/></Button>
        </Box>
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:"babyblue"}} ><BiLogoCss3/></Button>
        </Box>
        </div>
      </div>
  </section>
  )
}

export default Skills