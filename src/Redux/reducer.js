import * as types from "./actionType";

// setting up initial state 
const initialState = {
  code :91,
  mobilenumber: [], 
  otp : [],
  loading: true,
};

const apiReducers = (state = initialState, action) => {
    // using switch case for different action types 
  switch (action.type) {
    case types.GET_OTP:
        return {
        ...state,
          code: action.payload.code,
          mobilenumber: action.payload.mobilenumber,
          loading: false,
         
        }
    case types.VERIFY_OTP:
        return {
          ...state,
            code: action.payload.code,
            mobilenumber: action.payload.mobilenumber,
            otp: action.payload.otp,
            loading  : false,
            
        }
    default:
      return state;
  }
};
export default apiReducers ;