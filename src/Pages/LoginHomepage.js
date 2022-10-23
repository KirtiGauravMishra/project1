import { WidthFull } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './page.css';
import { NavLink } from 'react-router-dom';

const LoginHomepage = () => {
    const navigate = useNavigate();

   const handleLogout = () =>{
    localStorage.clear();
    navigate('/');
    }

  return (
    <div className="maindiv">
        
    <div>
        <div className = "navlink">
  <NavLink to ="/details" className= "details" > Details </NavLink>
  <NavLink to ="/explore" className = "explore"> Explore  </NavLink>
  <button className =" btnlogout"  onClick={handleLogout}> Logout </button>


  </div>

    </div>
    <h2><center>Hello ji ... You're Logged in</center> </h2>
    </div>
  )
}

export default LoginHomepage;