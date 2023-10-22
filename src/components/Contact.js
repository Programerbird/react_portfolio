import React from 'react'
import './Contact.css'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Contact = () => {
  return (
    <section id="contact"> 
    
       <form>
       <div className='contactmain'>
      <h1>Contact</h1>
      </div>
       <Box className='namet'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      </Box>
     
     
      <Box className='namet'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      </Box>


      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='massaget' >
      <TextField
          id="filled-multiline-static"
          label="Massage"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
        />
      </div >
      
      </Box>
      <div className='buttont'  >
      <Button  variant="contained" endIcon={<SendIcon />}>
        Send
     </Button>
     </div>
    </form>
  </section>
  )
}

export default Contact