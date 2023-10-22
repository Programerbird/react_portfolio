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
import py from '../Pictures/pythonlogo.png'
import java from '../Pictures/javascriptlogo.png'
import c from '../Pictures/c.png'
import html from '../Pictures/html.png'
import css from '../Pictures/css.png'
import vscode from '../Pictures/vscode.png'


const Skills = () => {
  return (
    <section id="skills"> 
    <div><h1 className='sk_name' >Skills</h1></div>
      <div className='sk_wrapper' >
        <div className='icons' >
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:"yellow"}} ><img src={java} alt='javalogo'/></Button>
        </Box>
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:"cyan"}} ><img  src={py} alt='pythonimage'/></Button>
        </Box>
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:"Midnight blue"}} ><img src={c} alt='c++logo'/></Button>
        </Box>
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:"orange"}} ><img src={html} alt='htmllogo'/></Button>
        </Box>
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:"Royal blue"}} ><img src={css} alt='csslogo'/></Button>
        </Box>
        <Box  component="span" sx={{ p: 1, border: '0.1px dashed grey' }}>
        <Button style={{color:"purple"}} ><img src={vscode} alt='vscodelogo'/></Button>
        </Box>
        </div>
      </div>
  </section>
  )
}

export default Skills