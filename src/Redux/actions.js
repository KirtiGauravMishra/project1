import * as types from "./actionType";
import axios from "axios";

// defining and dispatching my action 
// get otp

const getOtp = (mobilenumber) => ({
    type: types.GET_OTP,
    payload: mobilenumber,
    
  });

  // verify otp
  const verifyOtps = (mobilenumber, code, otp) => ({
    type: types.VERIFY_OTP,
    payload: mobilenumber,code,otp,
  });

  export const apicall=(mobilenumber) =>{

    return function (dispatch) {
    axios .post(`${process.env.SENDING_OTP}`,{
        code: 91,
        phone: mobilenumber,
    }).then(result => {
      console.log(result.data);
      dispatch(getOtp(result.data));
      alert('success')
     
    })
      .catch(error => {
        alert('service error')
        console.log(error);
      })
    };
     
  };

  export const validateOtp=(mobilenumber) =>{

    return function (dispatch) {
    axios .post(`${process.env.VALIDATING_OTP}`,{
        code: 91,
        phone: mobilenumber,

    }).then(result => {
      console.log(result.data);
      dispatch(verifyOtps(result.data));
      alert('success')
     
    })
      .catch(error => {
        alert('service error')
        console.log(error);
      })
    };
     
  };

  
