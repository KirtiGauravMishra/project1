import React, { createContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from "@material-ui/core/Grid";
import Poppage from './Popuppage';
import axios from 'axios';
import './Apps.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Context from '@mui/base/TabsUnstyled/TabsContext';
// import { useDispatch } from 'react-redux';
// import { apicall } from '../Redux/actions';
// import { validateOtp } from '../Redux/actions';

// export const Data = createContext();


const Mainfrontpage = () => {
 const [mobilenumber, setMobileNumber] =useState("");
const [errorinnumber, setErrorInNumber] =useState();
const [code, setCode]= useState(91);
const navigate = useNavigate();
const [data,setData] = useState({
  code: "",
  phone: ""
});

// const values =[mobilenumber, setMobileNumber];


// api call using post method with our data fields 
const apicall=() =>{

  console.log({ code, mobilenumber })
  axios.post('http://staging.alphonic.net.in:6600/api/v1/u/login/CheckMobile', {
    code: 91,
    phone: mobilenumber

  }).then(result => {
    const datas = result.data;
    console.log(datas)
    alert("Success, Here's Your OTP-> "+ datas.data.otp)
    localStorage.setItem('mo_no',mobilenumber); 
    setData(datas);
    navigate("/otppopup");
  })
    .catch(error => {
      alert('service error')
      console.log(error)
    })
    
}
// const responseData= (e) => {
//   let { name, value } = e.target;
//   setData({ ...state, [name]: value });
// };
 //for managing our renders and side effect on api calls 



  return (
    
    <div className= 'mainclass' >
        
        <div className = " subform">
        <h2> Let's get started !</h2>
            <h2> Continue with...</h2>

            <form style ={{align : "center"}}>

 <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>


  <TextField 
  id="outlined-basic" 
  type ="tel" 
  label="Phone Number " 
  variant="outlined" 
  error ={errorinnumber}
  value ={mobilenumber}
  onChange ={(e)=> { setMobileNumber(e.target.value);
    if (e.target.value.length !==10  ){
        setErrorInNumber(true);

    }
    else {setErrorInNumber(false)};
  }}

  />
</Box>



<Grid container justify ="center" item xs={4} md={4}>
<Stack direction="row" spacing={1} >
  <Button
   variant="contained"
   size="large" 
   onClick={apicall}
   
   > Submit</Button>
</Stack>
</Grid>
</form>
     </div>
    {/* < Data.Provider value ={data}>
     <Poppage />
    </Data.Provider> */}
         
    </div>
  )

}

export default Mainfrontpage;


