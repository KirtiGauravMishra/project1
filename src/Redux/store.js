import {  legacy_createStore as createStore, applyMiddleware } from "redux"; 
import logger from "redux-logger";// tracks the application state 
// redux thunk is  middleware that returns a function instead of action
// it dispatches action when condition is met 
import reduxThunk from "redux-thunk"; 
import rootReducer from "./root-reducer"; // combines reducers


const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger); 
}

// createStore(reducer, [preloadedState], [enhancer])
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

