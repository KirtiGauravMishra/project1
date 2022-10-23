import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Frontpagelogin from './Authentication/Frontpagelogin';
import { Routes, Route } from 'react-router-dom';
import Errorpage from './Authentication/Errorpage';
import Mainfrontpage from './Authentication/Mainfrontpage';
import Poppage from './Authentication/Popuppage';
import LoginHomepage from './Pages/LoginHomepage';
import UserVerifiedDetails from './Authentication/UserVerifiedDetails';
import Details from './Pages/Details';
import ProtectedRoute from './Authentication/ProtectedRoute';
import Explore from './Pages/Explore';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
    // localStorage.clear('token');

  return (
    <div className="App">
    <Routes>
    <Route  path="/" element={< Mainfrontpage />} />
    <Route  path="/login" element={< Mainfrontpage />} />
    <Route path = "/otppopup" element ={<Poppage />} />
    <Route exact path = "*" element ={<Errorpage />} />
    {/* <ProtectedRoute path ="/home" component ={<LoginHomepage/>}></ProtectedRoute> */}
    {/* <Route path = "/home"  element ={<LoginHomepage/>} /> */}
    
    <Route path="/home" element={<ProtectedRoute isLoggedIn={isLoggedIn}><LoginHomepage /></ProtectedRoute>}/>
    <Route path ="explore" element ={ <ProtectedRoute isLoggedIn={isLoggedIn}> <Explore /></ProtectedRoute>}  /> 
    <Route path = "/mydetails" element = {<UserVerifiedDetails />}  />
    <Route path = "/details"  element ={ <ProtectedRoute isLoggedIn={isLoggedIn}> <Details /></ProtectedRoute>} />
    
   </Routes>
  
    
    </div>
  );
}

export default App;
