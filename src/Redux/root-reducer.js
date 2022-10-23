import { combineReducers } from "redux";
import apiReducers from "./reducer";

// to combine reducers and access states from redux store 
const rootReducer = combineReducers({
  data : apiReducers
});

export default rootReducer;
