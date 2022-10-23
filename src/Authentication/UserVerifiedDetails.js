import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import './Apps.css';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const UserVerifiedDetails = () => {

const [name,setName] =useState();
const [email, setEmail] =useState();
const [birth, setBirth] = useState();
const [gender, setGender] = useState('male');
const [photo, setPhoto] = useState();
const myToken = localStorage.getItem('token');
const navigate =useNavigate();


const getFormData =(e)=> {
    e.preventDefault()   
    //console.log({Name: name, Email: email,DOB: birth,Photo: photo, Gender:gender, token:myToken});
   let login=  localStorage.getItem('token');
   console.log(login);
   if (login){
    navigate('/home');
   }
};


// useEffect(()=>{
//     let login = localStorage.getItem('token');
//     if (login){
      
//         navigate('/home');
//     }
//    }) 

function handleimage(e) {
    console.log(e.target.photo);
    setPhoto(URL.createObjectURL(e.target.photo[0]));
}
  return (
    <div>
<h2 style ={{  color: "blue"}}><center> Congratulations, Enter Your info to get  started !!</center>  </h2>
    <div className = 'form'> 
    < form onSubmit={getFormData}>
    
    <Stack

    
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        type ="text"
        label ="Full Name "
        id="outlined-basic"
        variant="outlined"
        size="small"
        value={name}
        onChange={(e)=> setName(e.target.value)}

      />
      <TextField
        label = "Email"
        type ="email"
        id="outlined-basic"
        variant="outlined"
        value ={email}
        onChange ={(e)=>setEmail(e.target.value) }
       
        
      />
         <TextField
        label = "Birth Date"
        type = "date"
        id="outlined-basic"
        variant="outlined"
        value ={birth}
        onChange ={(e)=> setBirth(e.target.value)}
      />
      {/* below is the code to upload the image files  */}
      <FormControl>
        <FormLabel> Photo</FormLabel>
          {/* <Stack direction="row" alignItems="center" spacing={2}> */}
      {/* <IconButton color="primary" aria-label="upload picture" component="label" > */}
        {/* <input hidden accept="image/*" type="file"  value ={photo} onchange= {handleimage} />
        <img src={photo} />
        <PhotoCamera />
      </IconButton>
    </Stack> */}
     <input type="file" onChange={handleimage} />
    <img src={photo} />
    
    </FormControl>




      {/* below is the import of radio buttons from material ui */}

     <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value ={gender}
        onChange ={(e)=> setGender(e.target.value)}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />

      </RadioGroup>
    </FormControl>


      </Box>
     
    </Stack>
    <Grid container justify ="center" item xs={2} md={2}>
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="primary"  type="submit">
      SUBMIT
      </Button>
    
    </Stack>
    </Grid>
    </form>
    
     </div>


    </div>
  )
}

export default UserVerifiedDetails;