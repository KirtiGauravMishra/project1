import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Apps.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import { mobile } from './Mainfrontpage';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Data } from './Mainfrontpage';



const Poppage = () => {
 //const {phone}= useContext(Data);
  //const[mobilenumber] = data ;// data destructuring 
  const [otp, setOtp] = useState();
 const [code, setCode]= useState(91);
 const getMobile=localStorage.getItem('mo_no');

// const {mobilenumber} = useContext(Data);
// console.log(mobilenumber);

 

const navigate =useNavigate();


  const verifycode =()=>{
    console.log({ code, mobilenumber: getMobile, otp })
    axios.post('http://staging.alphonic.net.in:6600/api/v1/u/login/CheckOtp', {
      code: 91,
      phone: getMobile,
      otp: otp
  
    }).then(result => {
      console.log(result)
      const token= result.data.data.token;
      localStorage.setItem('token', token );
      alert('success')
      navigate("/mydetails");


    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }
 // for managing our renders and side effect on api calls 
//  useEffect(()=>{
//  verifycode()
//   },[])


  return (
    <div>
      
    <div style ={{ paddingTop: "3rem", color: "blue"}}>
  <h2><center> Enter your Four Digit Code here</center> </h2>
  < div className="otpfield">
    {/* material-ui grid and stack for handling css of the box */}
  <Grid container justify ="center" item xs={8} md={7}>
  <Stack direction="row" spacing={2}>
  <Box 
      sx={{
        width: 500,
        maxWidth: '100%',
        align : "center" ,
      }}
    >
      <TextField fullWidth label="Enter OTP" 
      id="fullWidth"
       type="number" 
       onChange ={(e)=> { setOtp(e.target.value)}}
      
      />
    </Box>
    </Stack>
    </Grid>
    
    
    </div>
      <div className='btnotp'>
      <Grid container justify ="center" item xs={12} md={12}>
      <Stack direction="row" spacing={2}>
      <Button variant="contained"
      onClick={verifycode}
      >Verify</Button>     
    </Stack>
    </Grid>
      </div>
  </div>


    </div>
  )
}

export default Poppage; 